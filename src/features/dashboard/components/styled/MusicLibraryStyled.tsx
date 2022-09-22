import styled from "styled-components";

export const MusicLibraryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  .music-lib {
    &__title {
      margin-top: 20px;
      padding: 14px 8px;

      color: #292929;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const MusicLibraryItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 14px 8px;

  background-color: ${(props) => (props.active ? "#292929" : "#fff")};

  cursor: pointer;
  .music-lib {
    &__img {
      width: 56px;
      height: 56px;
      border-radius: 4px;
    }
    &__content {
      margin-left: 8px;
    }
    &__name {
      color: ${(props) => (props.active ? "#fff" : "#4b4b4b")};
      font-size: 13px;
      font-weight: 500;
    }
    &__artist {
      color: ${(props) => (props.active ? "#fff" : "#4b4b4b")};
      font-size: 11px;
      font-weight: 400;
    }
  }
`;
