import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import bookmark from "../../public/images/icon-bookmark-empty.svg";
import fullbookmark from "../../public/images/icon-bookmark-full.svg";
import playIcon from "../../public/images/icon-play.svg";
import iconMovie from "../../public/images/icon-nav-movies.svg";
import dot from "../../public/images/Pasted image.png";
import iconSeries from "../../public/images/icon-nav-tv-series.svg";

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
      <h4>Trending</h4>
      <Swiper
        className="swiper_container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        {filteredEnt.map((ent, index) => (
          <SwiperSlide key={index} className="swiper-slide ">
            <img src={ent.thumbnail.trending.small} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
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

  .swiper_container {
    height: 52rem;
    padding: 2rem 0;
    position: relative;
    display: flex;
  }

  .swiper-slide {
    width: 240px;
    height: 70px;
    position: relative;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .swiper-pagination {
    position: relative;
    width: 15rem !important;
    bottom: 1rem;
  }

  .swiper-pagination .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: var(--primary);
  }
`;
