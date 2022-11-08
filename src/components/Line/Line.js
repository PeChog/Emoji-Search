import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Line = ({ emoji }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2500);
  };
  return (
    <>
      <div
        className="line"
        onClick={() => {
          handleClick();
          navigator.clipboard.writeText(emoji.symbol);
        }}
      >
        <div className="emoji-name-plus-icon">
          <span>{emoji.title}</span>
          <span>{emoji.symbol}</span>
        </div>

        {clicked ? (
          <>
            <span className="copied">copied</span>
            <FontAwesomeIcon icon="fa-solid fa-copy" className="icon" />
          </>
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-copy" className="icon" />
        )}
      </div>
    </>
  );
};
export default Line;
