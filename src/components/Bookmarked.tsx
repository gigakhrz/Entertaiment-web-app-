import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";
import axios from "axios";
import dot from "../../public/images/Pasted image.png";
import { fetchEntertainment } from "../App";
import { useEffect } from "react";
import {
  setFilteredEnt,
  setFilteredUndefined,
} from "../features/filteredEntSlice";

const Bookmarked = (): JSX.Element => {
  const dispatch = useDispatch();

  //კომპონენტად შეიძლება გატანა იმ დივის რომელიც იმაპება.

  //all entertainment state
  const entertainment = useSelector(
    (store: RootState) => store.entertainment.entertainment
  );

  //when user filter the entertainment result will save in this state
  const filteredEnt = useSelector(
    (store: RootState) => store.filteredEnt.filtered
  );

  // Make sure that the user is logged in
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  // catch userEmail to send put request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
  );

  const bookmarkedData = entertainment.filter((item) => {
    return item.isBookmarked === true;
  });

  //bookmark entertainment
  const updateEntertainment = async (bookmarked: boolean, id: string) => {
    if (isLoggedIn) {
      try {
        await axios.put(
          `http://localhost:3000/updateBookmarked/${userEmail}/${id}`,
          {
            isBookmarked: bookmarked,
          }
        );

        fetchEntertainment(isLoggedIn, userEmail, dispatch);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //based on this value will filter entertainment
  const inputValue = useSelector((store: RootState) => store.inputValue.value);

  useEffect(() => {
    const filterEnt = (): void => {
      let data = bookmarkedData;
      if (inputValue.length > 0) {
        data = data.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        dispatch(setFilteredEnt(data));
      } else dispatch(setFilteredUndefined());
    };
    filterEnt();
  }, [inputValue]);

  return (
    <BookmarkWrapper>
      <h4>Bookmarked Movies</h4>
      {isLoggedIn ? (
        <div className="mapCont">
          {(filteredEnt === undefined ? bookmarkedData : filteredEnt).map(
            (ent, index) => (
              <div key={index} className="container">
                <div className="imgCont">
                  <img
                    className="entImg"
                    src={ent.thumbnail.regular.small}
                    alt="image"
                  />
                  <div className="overlay">
                    <button className="playWrapper">
                      <img
                        className="playIcon"
                        src={playIcon}
                        alt="play icon "
                      />
                      <p>Play</p>
                    </button>
                  </div>
                </div>
                <div className="bookmark">
                  <img
                    onClick={() =>
                      updateEntertainment(!ent.isBookmarked, ent._id)
                    }
                    src={ent.isBookmarked === false ? bookmark : fullbookmark}
                    className="bookmarkImg"
                    alt="empty bookmark image"
                  />
                </div>
                {/* The bottom side of the element where the title, rating, and other information are located. */}
                <div className="title">
                  <h6>{ent.year}</h6>
                  <img className="dot" src={dot} alt="" />
                  <img
                    className="movie"
                    src={ent.category === "Movie" ? iconMovie : iconSeries}
                    alt=""
                  />
                  <h6>{ent.category}</h6>
                  <img className="dot" src={dot} alt="" />
                  <h6>{ent.rating}</h6>
                </div>
                <p className="name">{ent.title}</p>
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          <p className="notLoggedIn">Please log in to bookmark entertainment</p>
        </div>
      )}
    </BookmarkWrapper>
  );
};

export default Bookmarked;

const BookmarkWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  width: 100%;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin-top: 34px;
    gap: 24px;
  }

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
    max-width: 670px;
    @media screen and (min-width: 768px) {
      row-gap: 24px;
      column-gap: 30px;
      max-width: 1024px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 1240px;
      gap: 32px 40px;
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
      max-width: 302px;
    }

    @media screen and (min-width: 1024px) {
      min-width: 280px;
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
      @media screen and (min-width: 1024px) {
        min-height: 174px;
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
      @media screen and (min-width: 768px) {
        gap: 8px;
        margin-top: 0;
      }

      h6 {
        font-size: 11px;
        font-weight: 300;
        color: white;
        @media screen and (min-width: 768px) {
          font-size: 13px;
        }
      }

      .dot {
        width: 2px;
        height: 2px;
        @media screen and (min-width: 768px) {
          width: 3px;
          height: 3px;
        }
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
      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }
  }

  .notLoggedIn {
    font-weight: 300;
    font-size: 16px;
    color: white;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
