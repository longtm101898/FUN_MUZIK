import styled from "styled-components";

export const MusicControlWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;

  .music-ctrl {
    &__move-btn {
      cursor: pointer;
      font-size: 28px;
    }
    &__play-btn {
      background-color: transparent;
      color: #292929;
      border: 8px solid #292929;
      border-radius: 50%;
      cursor: pointer;

      width: 80px;
      height: 80px;
      font-size: 40px;
      margin: 10px 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: box-shadow 0.5s;
    }
  }
`;
