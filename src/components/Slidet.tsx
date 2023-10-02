import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import store, { RootState } from "../features/store";
const entertainment = useSelector(
  (store: RootState) => store.entertainment.entertainment
);

const filteredEnt = entertainment.filter((ent) => ent.isTrending === true);

const Slider = (): JSX.Element => {
  return (
    <Container>
      <h4>Trending</h4>
      <Swiper>
        <SwiperSlide></SwiperSlide>
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
`;
