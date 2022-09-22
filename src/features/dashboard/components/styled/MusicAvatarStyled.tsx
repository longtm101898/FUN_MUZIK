import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .avatar {
    &__img-group {
      position: relative;
      width: 400px;
      height: 400px;
      margin-bottom: 20px;
    }
    &__shadow {
      position: absolute;
      top: 0;
      z-index: 0;
      width: 402px;
      height: 402px;
      filter: blur(10px);
      border-radius: 20px;
    }
    &__main {
      width: 400px;
      height: 400px;
      border-radius: 20px;
      position: absolute;
      top: 0;
      z-index: 1;
    }
    &__artist {
    }
  }
`;
