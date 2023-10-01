import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slider = (): JSX.Element => {
  return (
    <SliderCont>
      <h2>Trending</h2>
      <motion.div className="carusel"></motion.div>
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

  .carusel {
    cursor: grab;
    overflow-x: hidden;
    background-color: #10141e;
  }
`;
