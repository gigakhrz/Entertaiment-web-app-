import { styled } from "styled-components";

const AllEntertainment = (): JSX.Element => {
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
