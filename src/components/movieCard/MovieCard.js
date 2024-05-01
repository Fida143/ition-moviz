import React, { useState } from "react";
import "./movieCard.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";

const MovieCard = ({ movieDetails, handleFavoriteMovie }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = (e) => {
    e.stopPropagation();

    setFavorite(!favorite);
  };
  return (
    <div className="card">
      <div className="movie__img">
        <img src={movieDetails.moviemainphotos} alt={movieDetails.movietitle} />
        <div className="controls">
          <span
            className={`heart__icon ${favorite ? "red__heart" : ""}`}
            onClick={(e) => {
              handleFavorite(e);
              handleFavoriteMovie(movieDetails.movietitle);
            }}
          >
            {favorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </span>
          <span className="play__icon">
            <FaRegCirclePlay />
          </span>
        </div>
      </div>
      <div className="movie__details">
        <h2 className="title">{movieDetails.movietitle}</h2>
        <div className="genres">
          {movieDetails.moviegenres.map((genre, i) => (
            <span key={i} className="genre">
              {genre}
            </span>
          ))}
        </div>
        <div className="languages">
          {movieDetails.movielanguages.map((language, i) => (
            <span key={i} className="language">
              {language}
            </span>
          ))}
        </div>
        <div className="countries">
          {movieDetails.moviecountries.map((country, i) => (
            <span key={i} className="country">
              {country}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
