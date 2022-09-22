import React from "react";
import { IMusic } from "../types/MusicType";
import {
  MusicLibraryItem,
  MusicLibraryWrapper,
} from "./styled/MusicLibraryStyled";

type IMusicLibrary = {
  idx: number;
  musicData: IMusic[];
  setIdx: (param: number) => void;
};
export const MusicLibrary = ({ idx, musicData, setIdx }: IMusicLibrary) => {
  const onChangeMusic = (index: number) => {
    setIdx(index);
  };
  return (
    <MusicLibraryWrapper>
      <h4 className="music-lib__title">Library</h4>

      <div className="grid grid-flow-row auto-rows-max">
        {musicData.map((muzik, index) => (
          <MusicLibraryItem
            key={muzik.id}
            active={idx === index}
            onClick={() => onChangeMusic(index)}
          >
            <img
              className="music-lib__img"
              draggable={false}
              src={muzik.cover}
              alt=""
            />
            <div className="music-lib__content">
              <p className="music-lib__name">{muzik.name}</p>
              <p className="music-lib__artist">{muzik.artist}</p>
            </div>
          </MusicLibraryItem>
        ))}
      </div>
    </MusicLibraryWrapper>
  );
};
