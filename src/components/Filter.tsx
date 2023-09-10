import { styled } from "styled-components";
import search from "../../public/images/icon-search.svg";

const Filter = (): JSX.Element => {
  const path = window.location.pathname;

  return (
    <FilterCont path={path}>
      <button>
        <img src={search} alt="Search icon" />
      </button>

      <input
        type="text"
        placeholder={
          path === "/"
            ? "Search for movies or"
            : path === "movies"
            ? "Search for movies"
            : path === "tv-series"
            ? "Search for TV series"
            : path === "bookmarked"
            ? "Search for bookmarke"
            : ""
        }
      />
    </FilterCont>
  );
};

export default Filter;

const FilterCont = styled.form<{ path: string }>`
  padding: 0 16px;
  display: ${(props) =>
    props.path === "/logIn"
      ? "none"
      : props.path === "/signUp"
      ? "none"
      : "flex"};
  align-items: center;
  align-items: flex-end;
  gap: 16px;
  width: 100%;

  button {
    border: none;
    width: 24px;
    height: 24px;
    background: none;
  }

  input {
    background: none;
    border: none;
    outline: none;
    height: 20px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
  }
`;
