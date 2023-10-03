import styled from "styled-components";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";
import dot from "../../public/images/Pasted image.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import axios from "axios";
import { fetchEntertainment } from "../App";

const TrendingEnt = (): JSX.Element => {
  const [width, setWidth] = useState<number | undefined>(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  const enjoyment = useSelector(
    (ent: RootState) => ent.entertainment.entertainment
  );

  const isTrendFilter = enjoyment.filter((enjoy) => enjoy.isTrending === true);

  // Make sure that the user is logged in
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  // catch userEmail to send put request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
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
    }
  };

  useEffect(() => {
    const current = carousel.current;
    if (current) {
      if (
        typeof current.scrollWidth !== "undefined" &&
        typeof current.offsetWidth !== "undefined"
      ) {
        setWidth(current.scrollWidth - current.offsetWidth);
      }
    }
  }, []);

  return (
    <TrendingMain>
      <h2> Trending</h2>
      {width !== undefined && (
        <motion.div
          ref={carousel}
          className="carousel"
          whileDrag={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -930 }}
            className="innerCarousel"
          >
            {isTrendFilter.map((trend) => (
              <motion.div className="item" key={trend._id}>
                <img
                  className="ImgTrend"
                  src={trend.thumbnail.trending.small}
                />

                <div className="overlay">
                  <button className="playButton">
                    <img className="playSvg" src={playIcon} alt="play svg" />
                    <h3>Play </h3>
                  </button>
                </div>

                <div className="trendingStructure">
                  <div className="bookmarkTrend">
                    <img
                      onClick={() =>
                        updateEntertainment(!trend.isBookmarked, trend._id)
                      }
                      src={trend.isBookmarked ? fullbookmark : bookmark}
                      alt="bookmark svg"
                    />
                  </div>
                  <div className="TrendTitleDiv">
                    <div className="infoTrand">
                      <h4> year</h4>
                      <img src={dot} className="dot" />
                      <img
                        src={
                          trend.category === "Movie" ? iconMovie : iconSeries
                        }
                        className="movieSerielog"
                      />
                      <h4> {trend.category}</h4>
                      <img src={dot} className="dot" />
                      <h4> {trend.rating}</h4>
                    </div>
                    <h2> {trend.title}</h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </TrendingMain>
  );
};

const TrendingMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  overflow: hidden;

  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.312px;
  }

  .carousel {
    cursor: grab;
    overflow-x: hidden;
    background-color: #10141e;

    .innerCarousel {
      display: flex;
      background-color: #10141e;
      gap: 12px;
    }

    .item:hover .ImgTrend {
      display: flex;
      transform: scale(1.05);
    }

    .item {
      width: 240px;
      height: 140px;
      border-radius: 8px;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      @media screen and (min-width: 500px) {
        width: 360px;
        height: 210px;
      }

      .ImgTrend {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease 0s;
      }

      .trendingStructure {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 8px 8px 16px 16px;
        align-items: flex-end;
        gap: 46px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .bookmarkTrend {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(6, 0, 27, 0.501);
          z-index: 2;
          cursor: pointer;
        }

        .TrendTitleDiv {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          .infoTrand {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            gap: 6px;

            h4 {
              color: #fff;
              font-size: 12px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              opacity: 0.75;
            }

            .dot {
              width: 3px;
              height: 3px;
            }

            .movieSerielog {
              width: 12px;
              height: 12px;
            }
          }

          h2 {
            color: #fff;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }

    .overlay {
      display: none;
      position: absolute;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );

      .playButton {
        width: 80px;
        height: 30px;
        border-radius: 28.5px;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        background: rgba(255, 255, 255, 0.25);

        .playSvg {
          width: 16px;
          height: 16px;
          z-index: 2;
        }

        h3 {
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
    }

    .item:hover .overlay {
      display: flex;
    }
  }
`;
export default TrendingEnt;
