import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";
import dot from "../../public/images/Pasted image.png";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";
import bookmark from "../../public/images/icon-bookmark-empty.svg";

const AllEntertainment = (): JSX.Element => {
  //all entertainment state
  const entertainment = useSelector((store: RootState) => store.entertainment);
  console.log(entertainment);
  return (
    <Wrapper>
      <h4>Recomended for you</h4>
      <div className="mapCont">
        {entertainment.entertainment.map((ent, index) => (
          <div key={index} className="container">
            <img src={ent.thumbnail.regular.small} alt="" />
            <div className="bookmark">
              <img
                src={bookmark}
                className="bookmarkImg"
                alt="empty bookmark image"
              />
            </div>
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
    column-gap: 15px;
  }

  .container {
    width: 164px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    position: relative;

    img {
      width: 164px;
    }

    .bookmark {
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #10141e;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 8px;
      right: 8px;
      .bookmarkImg {
        width: 14px;
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
