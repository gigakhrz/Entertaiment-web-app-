import { css } from "styled-components";

//here is styles wich i need in different entertainment component

export const containetStyles = css`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  width: 100%;

  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    color: white;
    align-self: baseline;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      letter-spacing: -0.5px;
    }
  }

  .mapCont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 15px;
    column-gap: 15px;
    justify-content: center;
    @media screen and (min-width: 768px) {
      row-gap: 24px;
      column-gap: 30px;
    }
  }

  .container {
    width: 164px;
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    position: relative;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      min-width: 220px;
      flex: 1;
      flex: auto;
    }

    .imgCont {
      position: relative;
      width: 100%;
      height: 110px;
      overflow: hidden;
      border-radius: 8px;

      @media screen and (min-width: 768px) {
        height: 140px;
        flex: 1;
      }

      .entImg {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease 0s;
      }

      .overlay {
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100px;
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        border-radius: 8px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );

        .playWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 24px;
          border-radius: 28.5px;
          border: none;
          outline: none;
          gap: 5px;
          background: rgba(255, 255, 255, 0.25);

          .playIcon {
            width: 15px;
            height: 15px;
            z-index: 2;
          }

          p {
            font-size: 12px;
            font-weight: 500;
            color: white;
            z-index: 2;
          }
        }
      }
    }

    .imgCont:hover .overlay {
      display: flex;
    }

    .imgCont:hover .entImg {
      display: flex;
      transform: scale(1.05);
    }

    .bookmark {
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #10141e;
      background: rgba(6, 0, 27, 0.501);
      display: flex;
      align-items: center;
      justify-content: center;
      top: 8px;
      right: 8px;
      z-index: 2;

      .bookmarkImg {
        width: 12px;
        height: 14px;
      }
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: baseline;
      gap: 6px;
      margin-top: 4px;

      h6 {
        font-size: 11px;
        font-weight: 300;
        color: white;
      }

      .dot {
        width: 2px;
        height: 2px;
      }

      .movie {
        width: 10px;
        height: 10px;
      }
    }

    .name {
      font-size: 14px;
      font-weight: 500;
      align-self: baseline;
      color: white;
    }
  }

  .messageContainer {
    display: flex;
    align-items: center;
    height: 35px;
    top: 10px;
    background-color: red;
    padding: 0 8px;
    justify-content: center;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    transition: 0.5s;
  }
`;
