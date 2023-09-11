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
      <div className="mapCont">
        {entertainment.entertainment.map((ent, index) => (
          <div key={index} className="container">
            <img src={ent.thumbnail.regular.small} alt="" />
            <div className="title"></div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AllEntertainment;

const Wrapper = styled.div`
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

  .mapCont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 15px;
    column-gap: 15px;
  }

  .container {
    width: 164px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      width: 164px;
    }

    .title {
    }
  }
`;
