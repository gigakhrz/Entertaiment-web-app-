import { styled } from "styled-components";
import AllEntertainment from "./AllEntertainments";
import Slider from "./Slider";

const Home = (): JSX.Element => {
  return (
    <HomeWrapper>
      <Slider />
      <AllEntertainment />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    padding-bottom: 56px;
  }
  @media (min-width: 1024px) {
    padding: 0 0;
    width: 850px;
    padding-bottom: 52px;
  }

  @media (min-width: 1110px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }

  @media (min-width: 1300px) {
    width: 1100px;
  }

  @media (min-width: 1500px) {
    width: 1200px;
  }

  @media (min-width: 1600px) {
    width: 1440px;
  }

  @media (min-width: 1800px) {
    width: 1600px;
  }
`;
