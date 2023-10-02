import styled from "styled-components";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import bookmark from "../../public/images/icon-bookmark-empty.svg";
// import fullbookmark from "../../public/images/icon-bookmark-full.svg";
// import playIcon from "../../public/images/icon-play.svg";
// import iconMovie from "../../public/images/icon-nav-movies.svg";
// import dot from "../../public/images/Pasted image.png";
// import iconSeries from "../../public/images/icon-nav-tv-series.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import axios from "axios";
import { fetchEntertainment } from "../App";

const Slider = (): JSX.Element => {
  const entertainment = useSelector(
    (store: RootState) => store.entertainment.entertainment
  );

  const filteredEnt = entertainment.filter((ent) => ent.isTrending === true);

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
  return (
    <Container>
      <h2>Trending</h2>
      <Splide
        options={{
          fixedWidth: 700,
          autoplay: true,
          perMove: 1,
          interval: 2000,
          pagination: false,
          arrows: false,
          direction: "ltr",
          pauseOnFocus: true,
          pauseOnHover: true,
          start: 2,
          gap: 70,
          breakpoints: {
            1920: {
              fixedWidth: 600,
              gap: 60,
            },
            1440: {
              fixedWidth: 470,
              gap: 40,
            },
            768: {
              fixedWidth: 470,
              gap: 40,
            },
            500: {
              fixedWidth: 210,
              gap: 20,
            },
          },
        }}
      >
        {filteredEnt.map((movie, index) => (
          <SplideSlide key={index}>
            <div className="trendingEnt">
              <img src={movie.thumbnail.regular.large} alt="movies-trending" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    color: white;
    align-self: baseline;
  }

  .trendingEnt {
    display: flex;
    flex-direction: row;
    img {
      min-width: 163px;
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`;
