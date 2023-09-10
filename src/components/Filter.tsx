import { styled } from "styled-components";
import search from "../../public/images/icon-search.svg";

const Filter = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <FilterCont>
      <button>
        <img src={search} alt="Search icon" />
      </button>
    </FilterCont>
  );
};

export default Filter;

const FilterCont = styled.form`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  button {
    border: none;
    width: 24px;
    height: 24px;
    background: none;
  }
`;
