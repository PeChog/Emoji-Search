import emojis from "./data/emoji.json";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faCopy } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Line from "./components/Line/Line";

import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";

library.add(faMagnifyingGlass, faCopy);

function App() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <Header />

      <div className="content-container">
        <SearchBar handleChange={handleChange} />
        {input !== "" ? (
          <div className="searchResult-container">
            <div className="content">
              {emojis.map((emoji) => {
                if (emoji.keywords.includes(input)) {
                  return <Line key={emoji.title} emoji={emoji} />;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ) : null}
        <div className="footer">
          Made with <span className="footer-var">React</span> by{" "}
          <span className="footer-var">Quasar</span>
        </div>
      </div>
    </div>
  );
}

export default App;
