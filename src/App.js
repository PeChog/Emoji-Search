import emojis from "./data/emoji.json";
import { useState } from "react";

import Header from "./components/Header/Header";
import Line from "./components/Line/Line";

import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="content-container">
          <SearchBar handleChange={handleChange} />
          {input !== "" ? (
            <div className="searchResult-container">
              {emojis.map((emoji) => {
                if (emoji.keywords.includes(input)) {
                  return <Line key={emoji.title} emoji={emoji} />;
                } else {
                  return null;
                }
              })}
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
