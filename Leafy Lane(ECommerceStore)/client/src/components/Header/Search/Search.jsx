import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";

export default function Search({ setShowSearch }) {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search For Products"
          autoFocus
        />
        <MdClose onClick={() => setShowSearch(false)} className="close-btn" />
      </div>
      {/* <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
          </div>
          <div className="prod-details">
            <span className="name">Name of Prod</span>
            <span className="desc">Prod Desc</span>
          </div>
        </div>
      </div> */}
      <div>This page is Under Development</div>
    </div>
  );
}
