import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";
import dot from "../../public/images/Pasted image.png";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import axios from "axios";
import { fetchEntertainment } from "../App";

const AllEntertainment = (): JSX.Element => {
  //all entertainment state
  const entertainment = useSelector((store: RootState) => store.entertainment);

  // catch userEmail to send put request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
  );

  // Make sure that the user is logged in
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  const dispatch = useDispatch();

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
    } else {
      console.log("please log in to bookmark");
    }
  };

  console.log(entertainment);
  return (
    <Wrapper>
      <h4>Recomended for you</h4>
      <div className="mapCont">
        {entertainment.entertainment.map((ent, index) => (
          <div key={index} className="container">
            <div className="imgCont">
              <img
                className="entImg"
                src={ent.thumbnail.regular.small}
                alt="image"
              />
              <div className="overlay">
                <button className="playWrapper">
                  <img className="playIcon" src={playIcon} alt="play icon " />
                  <p>Play</p>
                </button>
              </div>
            </div>
            <div className="bookmark">
              <img
                onClick={() => updateEntertainment(!ent.isBookmarked, ent._id)}
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
        ))}
      </div>
    </Wrapper>
  );
};

export default AllEntertainment;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;

  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    color: white;
    align-self: baseline;
  }

  .mapCont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 15px;
    column-gap: 4%;

    @media screen and (min-width: 420px) {
      column-gap: 3%;
    }
  }

  .container {
    width: 48%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    position: relative;
    cursor: pointer;

    .imgCont {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
      min-height: 114px;

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
`;
