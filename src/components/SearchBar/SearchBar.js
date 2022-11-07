import "./style.scss";
const SearchBar = ({ handleChange }) => {
  return <input type="text" onChange={handleChange} className="search" />;
};

export default SearchBar;
