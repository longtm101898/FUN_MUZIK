import styled from "styled-components";

export const MusicProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .music-progress {
    &__progress-bar {
      width: 0px;
      height: 7px;
      border-radius: 10px;
      background-color: #63add0;
    }
    &__progress-center {
      width: 70%;
      height: 7px;
      background-color: #d9d9d9;
      border-radius: 10px;
      margin: 0px 10px;

      cursor: pointer;
    }
  }
`;
