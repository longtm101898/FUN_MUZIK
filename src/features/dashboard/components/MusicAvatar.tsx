import React from "react";
import { AvatarWrapper } from "./styled/MusicAvatarStyled";

type IAvatar = {
  coverImg: string;
  artist: string;
};

export function MusicAvatar({ coverImg, artist }: IAvatar) {
  return (
    <AvatarWrapper>
      <div className="avatar__img-group">
        <img draggable={false} src={coverImg} className="avatar__shadow" />
        <img draggable={false} src={coverImg} className="avatar__main" />
      </div>
      <h4 className="avatar__artist">{artist}</h4>
    </AvatarWrapper>
  );
}
