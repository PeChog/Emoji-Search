import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
const SearchBar = ({ handleChange }) => {
  return (
    <div className="input-content">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        style={{ marginLeft: "0.4vw", color: "#757575" }}
      />
      <input
        type="text"
        onChange={handleChange}
        className="search"
        placeholder="Chercher un emoji"
      />
    </div>
  );
};

export default SearchBar;
