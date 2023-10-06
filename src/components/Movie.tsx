import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../features/store";
import axios from "axios";
import { fetchEntertainment } from "../App";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import dot from "../../public/images/Pasted image.png";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";
import { containetStyles } from "../../sharedStyles";
import { useEffect } from "react";
import { setFilteredEnt } from "../features/filteredEntSlice";
const Movies = (): JSX.Element => {
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

  const movies = entertainment.filter((item) => {
    return item.category === "Movie";
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
      let data = movies;
      if (inputValue.length > 0) {
        data = data.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        dispatch(setFilteredEnt(data));
      }
    };
    filterEnt();
  }, [inputValue]);

  console.log(movies);

  return (
    <TvSerieskWrapper>
      <h4>Movies</h4>

      <div className="mapCont">
        {(filteredEnt === undefined ? movies : filteredEnt).map(
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
          )
        )}
      </div>
    </TvSerieskWrapper>
  );
};

export default Movies;

const TvSerieskWrapper = styled.div`
  ${containetStyles}
`;
