import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";

const Bookmarked = (): JSX.Element => {
  const dispatch = useDispatch();

  //all entertainment state
  const entertainment = useSelector(
    (store: RootState) => store.entertainment.entertainment
  );

  // Make sure that the user is logged in
  const isLoggedIn = useSelector(
    (store: RootState) => store.isLoggedIn.loggedIn
  );

  const bookmarkedData = entertainment.filter((item) => {
    item.isBookmarked === true;
  });

  return (
    <BookmarkWrapper>
      <h4>Bookmarked Movies</h4>
      {isLoggedIn ? (
        <div className="mapCont">
          {bookmarkedData.map((ent, index) => (
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
          ))}
        </div>
      ) : (
        ""
      )}
    </BookmarkWrapper>
  );
};

export default Bookmarked;

const BookmarkWrapper = styled.div`
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
`;
