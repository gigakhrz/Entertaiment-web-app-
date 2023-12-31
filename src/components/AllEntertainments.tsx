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
import { useEffect, useState } from "react";
import { containetStyles } from "../../sharedStyles";
import {
  setFilteredEnt,
  setFilteredUndefined,
} from "../features/filteredEntSlice";

const AllEntertainment = (): JSX.Element => {
  //all entertainment state
  const entertainment = useSelector((store: RootState) => store.entertainment);

  //when user filter the entertainment result will save in this state
  const filteredEnt = useSelector(
    (store: RootState) => store.filteredEnt.filtered
  );

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
          `https://entertainment-back-end-production.up.railway.app/updateBookmarked/${userEmail}/${id}`,
          {
            isBookmarked: bookmarked,
          }
        );

        fetchEntertainment(isLoggedIn, userEmail, dispatch);
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowMessage(true);
    }
  };

  const inputValue = useSelector((store: RootState) => store.inputValue.value);

  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  useEffect(() => {
    const filterEnt = (): void => {
      let data = entertainment.entertainment;
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
    <Wrapper>
      <h4>Recomended for you</h4>
      <div className="mapCont">
        {(filteredEnt === undefined
          ? entertainment.entertainment
          : filteredEnt
        ).map((ent, index) => (
          <div key={index} className="container">
            <div className="imgCont">
              <img
                className="entImg"
                src={ent.thumbnail.regular.small}
                alt="image"
              />
              <div className="overlay">
                <button
                  className="playWrapper"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
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

        <div
          className="messageContainer"
          style={{
            position: showMessage ? "absolute" : "fixed",
            right: showMessage ? "10px" : "-100%",
          }}
        >
          <p>Please log in to bookmark</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AllEntertainment;

const Wrapper = styled.form`
  ${containetStyles}
`;
