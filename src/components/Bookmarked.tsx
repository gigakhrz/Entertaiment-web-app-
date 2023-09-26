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

  // catch userEmail to send put request for user's entertainments.
  const userEmail = useSelector(
    (store: RootState) => store.userEmail.userEmail
  );

  const bookmarkedData = entertainment.filter((item) => {
    item.isBookmarked === true;
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
