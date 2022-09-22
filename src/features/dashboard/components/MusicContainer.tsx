import React, { useState, useEffect } from "react";
import { IMusic } from "../types/MusicType";
import { MusicAvatar } from "./MusicAvatar";
import { MusicControl } from "./MusicControl";
import { MusicProgress } from "./MusicProgress";

type IMusicContainer = {
  idx: number;
  oldIdx: React.MutableRefObject<number>;
  className?: string;
  musicData: IMusic[];
  setIdx: (param: number) => void;
};

let player: HTMLAudioElement = new Audio();
export function MusicContainer({
  idx,
  oldIdx,
  className,
  musicData,
  setIdx,
}: IMusicContainer) {
  const [playState, setPlayState] = useState(false);

  useEffect(() => {
    if (idx !== oldIdx.current) {
      player.pause();
      player.src = musicData[idx].audio;
      player.load();
      player.play();
      oldIdx.current = idx;
      setPlayState(true);
    }
  }, [idx, oldIdx.current]);

  useEffect(() => {
    if (playState) {
      player.play();
    } else {
      player.pause();
    }
  }, [playState]);

  useEffect(() => {
    if (musicData.length > 0) {
      player = new Audio(musicData[0].audio);
    }
  }, [musicData]);

  return (
    <div className={`music-container ${className}`}>
      <MusicAvatar
        coverImg={musicData[idx].cover}
        artist={musicData[idx].artist}
      />
      <MusicProgress
        idx={idx}
        player={player}
        playlistLength={musicData.length}
        setIdx={setIdx}
      />
      <MusicControl
        idx={idx}
        playState={playState}
        playlistLength={musicData.length}
        setIdx={setIdx}
        setPlayState={setPlayState}
      />
    </div>
  );
}
