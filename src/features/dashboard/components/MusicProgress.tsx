import React, { useCallback, useEffect, useRef, useState } from "react";

import { formatTime } from "@/utils/format";
import { MusicProgressWrapper } from "./styled/MusicProgressStyled";

type IMusicProgress = {
  idx: number;
  playlistLength: number;
  player: HTMLAudioElement;
  setIdx: (param: number) => void;
};

export function MusicProgress(props: IMusicProgress) {
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressCenterRef = useRef<HTMLDivElement>(null);
  const { player } = props;

  function updateProgress(e: React.MouseEvent<HTMLDivElement>): void {
    const progressBar = progressBarRef.current;
    const progressCenter = progressCenterRef.current;
    if (progressBar && progressCenter) {
      const offset = progressBar.getBoundingClientRect().left;
      const newOffSet = e.clientX;
      const newWidth = newOffSet - offset;
      progressBar.style.width = newWidth + "px";
      const secPerPx =
        audioDuration / progressCenter.getBoundingClientRect().width;
      player.currentTime = secPerPx * newWidth;
      setAudioDuration(Math.ceil(player.duration));
      setCurrentTime(Math.ceil(player.currentTime));
    }
  }

  const onTimeUpdate = useCallback(
    (progressBar: HTMLDivElement | null, progressCenterWidth?: number) => {
      if (progressCenterWidth) {
        if (Math.ceil(player.duration) !== audioDuration) {
          setAudioDuration(Math.ceil(player.duration));
        }
        setCurrentTime(Math.ceil(player.currentTime));

        if (player.currentTime === 0 && progressBar) {
          progressBar.style.width = 0 + "px";
          return;
        }
        const secPerPx = Math.ceil(player.duration) / progressCenterWidth;
        const newWidth = player.currentTime / secPerPx;

        if (progressBar) {
          progressBar.style.width = newWidth + "px";
        }

        if (player.currentTime === player.duration) {
          props.setIdx(
            props.idx + 1 >= props.playlistLength ? 0 : props.idx + 1
          );
        }
      }
    },
    [audioDuration, player, props]
  );

  useEffect(() => {
    const progressCenter = progressCenterRef.current;
    const progressBar = progressBarRef.current;
    const progressCenterWidth = progressCenter?.getBoundingClientRect().width;
    player.addEventListener("timeupdate", () =>
      onTimeUpdate(progressBar, progressCenterWidth)
    );

    return () =>
      player.removeEventListener("timeupdate", () =>
        onTimeUpdate(progressBar, progressCenterWidth)
      );
  }, [onTimeUpdate, player]);

  return (
    <MusicProgressWrapper className="music-progress">
      <div className="music-progress__curr-time">
        <p>{formatTime(currentTime)}</p>
      </div>
      <div
        ref={progressCenterRef}
        className="music-progress__progress-center"
        onClick={updateProgress}
      >
        <div ref={progressBarRef} className="music-progress__progress-bar" />
      </div>
      <div className="music-progress__audio-length">
        <p>{formatTime(audioDuration)}</p>
      </div>
    </MusicProgressWrapper>
  );
}
