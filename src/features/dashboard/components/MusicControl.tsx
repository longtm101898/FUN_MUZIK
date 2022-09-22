import React from "react";

import {
  SkipBackwardSvg,
  SkipForwardSvg,
  PlayBtnSvg,
  PauseBtnSvg,
} from "@components/Svg";
import { MusicControlWrapper } from "./styled/MusicControlStyled";

type IMusicControl = {
  idx: number;
  playState: boolean;
  playlistLength: number;
  setIdx: (param: number) => void;
  setPlayState: (param: boolean) => void;
};

export function MusicControl(props: IMusicControl) {
  return (
    <MusicControlWrapper className="music-ctrl">
      <button
        className="music-ctrl__move-btn"
        onClick={() =>
          props.setIdx(
            props.idx - 1 < 0 ? props.playlistLength - 1 : props.idx - 1
          )
        }
      >
        <SkipBackwardSvg />
      </button>
      {props.playState ? (
        <button
          className="music-ctrl__play-btn"
          onClick={() => props.setPlayState(false)}
        >
          <PauseBtnSvg />
        </button>
      ) : (
        <button
          className="music-ctrl__play-btn"
          onClick={() => props.setPlayState(true)}
        >
          <PlayBtnSvg />
        </button>
      )}
      <button
        className="music-ctrl__move-btn"
        onClick={() =>
          props.setIdx(
            props.idx + 1 >= props.playlistLength ? 0 : props.idx + 1
          )
        }
      >
        <SkipForwardSvg />
      </button>
    </MusicControlWrapper>
  );
}
