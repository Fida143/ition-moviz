import React from "react";
import "./sidebar.css";
import { IoMdHeart } from "react-icons/io";

const SideBar = ({ handleFilter, favorite }) => {
  return (
    <aside>
      <h2 className="filter-title">Filter</h2>
      <div className="categories">
        <h3>Moviegenres</h3>
        <div className="genres">
          <ul>
            <li>
              <input
                type="checkbox"
                name="Drama"
                id="Drama"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Drama
            </li>
            <li>
              <input
                type="checkbox"
                name="Action"
                id="Action"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Action
            </li>
            <li>
              <input
                type="checkbox"
                name="Crime"
                id="Crime"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Crime
            </li>

            <li>
              <input
                type="checkbox"
                name="Fantasy"
                id="Fantasy"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Fantasy
            </li>
            <li>
              <input
                type="checkbox"
                name="Adventure"
                id="Adventure"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Adventure
            </li>
          </ul>
        </div>
        <h3>Languages</h3>
        <div className="languages">
          <ul>
            <li>
              <input
                type="checkbox"
                name="Hindi"
                id="Hindi"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Hindi
            </li>
            <li>
              <input
                type="checkbox"
                name="English"
                id="English"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              English
            </li>
            <li>
              <input
                type="checkbox"
                name="Tamil"
                id="Tamil"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Tamil
            </li>
            <li>
              <input
                type="checkbox"
                name="Malayalam"
                id="Malayalam"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Malayalam
            </li>
            <li>
              <input
                type="checkbox"
                name="Kannada"
                id="Kannada"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Kannada
            </li>
            <li>
              <input
                type="checkbox"
                name="Telugu"
                id="Telugu"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Telugu
            </li>
          </ul>
        </div>
        <h3>Countries</h3>
        <div className="countries">
          <ul>
            <li>
              <input
                type="checkbox"
                name="India"
                id="India"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              India
            </li>
            <li>
              <input
                type="checkbox"
                name="United States"
                id="United States"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Unites States
            </li>
            <li>
              <input
                type="checkbox"
                name="France"
                id="France"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              France
            </li>
            <li>
              <input
                type="checkbox"
                name="Kuwait"
                id="Kuwait"
                onChange={(e) => {
                  handleFilter(e);
                }}
              />
              Kuwait
            </li>
          </ul>
        </div>
        <h3>Favourite</h3>
        <div className="countries">
          <ul>
            {favorite.map((fav, i) => {
              return (
                <li key={i}>
                  <span className="red__heart">
                    <IoMdHeart />
                  </span>{" "}
                  {fav}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
