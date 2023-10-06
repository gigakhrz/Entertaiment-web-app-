import { styled } from "styled-components";
import search from "../../public/images/icon-search.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setValue } from "../features/inputValueSlice";

const Filter = (): JSX.Element => {
  useNavigate();
  const path = window.location.pathname;

  const dispatch = useDispatch();

  const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setValue(e.target.value));
  };

  return (
    <FilterCont path={path}>
      <button>
        <img src={search} alt="Search icon" />
      </button>

      <input
        onChange={handleUpdateInput}
        type="text"
        placeholder={
          path === "/"
            ? "Search for movies or"
            : path === "/movies"
            ? "Search for movies"
            : path === "/tv-series"
            ? "Search for TV series"
            : path === "/bookmarked"
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
  height: 28px;
  display: ${(props) =>
    props.path === "/logIn"
      ? "none"
      : props.path === "/signUp"
      ? "none"
      : "flex"};
  gap: 16px;
  width: 100%;
  align-items: center;

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
    align-self: flex-end;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    color: white;
  }
`;
