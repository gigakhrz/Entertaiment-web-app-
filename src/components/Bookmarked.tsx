import { useDispatch } from "react-redux";
import { styled } from "styled-components";

const Bookmarked = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <BookmarkWrapper>
      <h4>Bookmarked Movies</h4>
    </BookmarkWrapper>
  );
};

export default Bookmarked;

const BookmarkWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;

  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.31px;
    color: white;
    align-self: baseline;
  }
`;
