import styled from "styled-components";

const entertainmentList = (): JSX.Element => {
  return (
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
      ))}{" "}
    </div>
  );
};

export default entertainmentList;
