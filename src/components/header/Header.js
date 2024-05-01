import React from "react";
import "./header.css";
import { IoSearch } from "react-icons/io5";
import { BsFilterRight } from "react-icons/bs";

const Header = ({ handleSearch, handleFilter }) => {
  return (
    <header className="nav">
      <div className="header__left">
        <h1>Ition-Moviz</h1>
      </div>
      <div className="header__right">
        <span className="search-ico">
          <IoSearch />
        </span>
        <input
          type="search"
          name="search"
          id="search-bar"
          placeholder={` Search your favorite movie here ... `}
          onChange={handleSearch}
        />
        <div className="filter-ico" onClick={() => handleFilter()}>
          <BsFilterRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
