import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import dot from "../../public/images/Pasted image.png";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";

const Slider = (): JSX.Element => {
  const entertainment = useSelector(
    (store: RootState) => store.entertainment.entertainment
  );
  const trendFilter = entertainment.filter((ent) => ent.isTrending === true);

  const [width, setWidth] = useState<any>(0);
  const carousel = useRef<any>();

  useEffect(() => {
    const current = carousel.current;
    console.log(carousel.current?.scrollWidth);
    if (current) {
      if (
        typeof current.scrollWidth !== "undefined" &&
        typeof current.offsetWidth !== "undefined"
      ) {
        setWidth(current.scrollWidth - current.offsetWidth);
      }
    }
  }, []);

  console.log(width);
  return (
    <SliderCont>
      <h2>Trending</h2>
      <motion.div className="carousel">
        <motion.div
          className="innerCarusel"
          drag="x"
          dragConstraints={{ right: 0 }}
        >
          {trendFilter.map((trend) => (
            <motion.div className="item" key={trend._id}>
              <img className="ImgTrend" src={trend.thumbnail.trending.small} />

              <div className="overlay">
                <button className="playButton">
                  <img className="playSvg" src={playIcon} alt="play svg" />
                  <h3>Play </h3>
                </button>
              </div>

              <div className="trendingStructure">
                <div className="bookmarkTrend">
                  <img
                    src={trend.isBookmarked ? fullbookmark : bookmark}
                    alt="bookmark svg"
                  />
                </div>
                <div className="TrendTitleDiv">
                  <div className="infoTrand">
                    <h4> year</h4>
                    <img src={dot} className="dot" />
                    <img
                      src={trend.category === "Movie" ? iconMovie : iconSeries}
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
    </SliderCont>
  );
};

export default Slider;

const SliderCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  overflow: hidden;

  h2 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    color: white;
    align-self: baseline;
  }

  .carousel {
    cursor: grab;
    overflow-x: hidden;
    background-color: #10141e;

    .innerCarusel {
      display: flex;
      background-color: #10141e;
      gap: 12px;

      .item {
        width: 240px;
        height: 140px;
        border-radius: 8px;
        position: relative;
        pointer-events: none;

        .ImgTrend {
          width: 100%;
          height: 100%;
          border-radius: 8px;
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
  }
`;
