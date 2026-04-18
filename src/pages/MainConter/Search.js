import { useState } from "react";
import "../../styles/MainConter/Search.css";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const expand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Search">
      <form id="content">
        <input
          type="text"
          className={`input ${isOpen ? "square" : ""}`}
          id="search-input"
        />

        <button
          type="button"
          className={`search ${isOpen ? "close" : ""}`}
          id="search-btn"
          onClick={expand}
        ></button>
      </form>
    </div>
  );
}

export default Search;