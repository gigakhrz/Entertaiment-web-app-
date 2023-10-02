import { styled } from "styled-components";
import AllEntertainment from "./AllEntertainments";
import Slider from "./Slidet";

const Home = (): JSX.Element => {
  return (
    <HomeWrapper>
      {/* <Slider /> */}
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
  padding: 0 16px;
`;
