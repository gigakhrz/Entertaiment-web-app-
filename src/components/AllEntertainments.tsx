import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { RootState } from "../features/store";

const AllEntertainment = (): JSX.Element => {
  //all entertainment state
  const entertainment = useSelector((store: RootState) => store.entertainment);
  console.log(entertainment);
  return (
    <Wrapper>
      <h4>Recomended for you</h4>
    </Wrapper>
  );
};

export default AllEntertainment;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
