import "./App.css";
import { useState, useEffect } from "react";
import Data from "./movieData/Data.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import MovieCard from "./components/movieCard/MovieCard.js";
import SideBar from "./components/sidebar/SideBar.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PageNotFound from "./components/pages/PageNotFound.js";

function App() {
  const [movieDB, setMovieDB] = useState(Data);
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false);
  const [filterData, setFilterData] = useState([]);

  // add favorite movies
  const handleFavoriteMovie = (movietitle) => {
    if ([...favoriteMovie].includes(movietitle)) {
      let index = [...favoriteMovie].findIndex((cat) => cat == movietitle);
      console.log(index, "ini");
      let newData = [...favoriteMovie];
      newData.splice(index, 1);
      setFavoriteMovie(newData);
      console.log(favoriteMovie, "fv");
    } else {
      setFavoriteMovie([...favoriteMovie, movietitle]);
      console.log(favoriteMovie, "fs");
    }
  };

  // add filter data
  const handleFilter = (e) => {
    let name = e.target.name;
    // name.toLowerCase();
    if (e.target.checked) {
      setFilterData([...filterData, name]);
    } else {
      let index = [...filterData].findIndex((cat) => cat == e.target.name);
      console.log(index, "in");
      let newData = [...filterData];
      newData.splice(index, 1);
      setFilterData(newData);
    }
  };

  // Debouncing
  let timer;
  const handleSearch = (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(e.target.value);
      setSearch(e.target.value);
    }, 500);
  };

  // Toggle Filter sidebar
  const handleFilterToggle = () => {
    setShowSideBar(!showSideBar);
  };

  // filter movies

  const filterMovies = (filData) => {
    if (filData.length > 0) {
      filData.forEach((d) => {
        let filterMovieDB = movieDB.filter((moviz) => {
          return (
            moviz.moviegenres.includes(d) ||
            moviz.movielanguages.includes(d) ||
            moviz.moviecountries.includes(d)
          );
        });
        setMovieDB(filterMovieDB);
      });
    } else {
      setMovieDB(Data);
    }
  };

  // render movies when filter data changes
  useEffect(() => {
    filterMovies(filterData);
    console.log(filterData, "fd");
  }, [filterData]);

  return (
    <div className="container">
      {console.log(movieDB)}
      <div className={`sidebar ${showSideBar ? "show" : "hide"} `}>
        <SideBar handleFilter={handleFilter} favorite={favoriteMovie} />
      </div>
      <div className="header">
        <Header handleSearch={handleSearch} handleFilter={handleFilterToggle} />
      </div>

      <main>
        <div className="movies">
          {movieDB.length > 0 &&
            movieDB
              .filter((movie) => {
                return search.toLowerCase() === ""
                  ? movie
                  : movie.movietitle.toLowerCase().includes(search);
              })
              .slice(page * 20 - 20, page * 20)
              .map((movie, i) => (
                <MovieCard
                  key={i}
                  movieDetails={movie}
                  handleFavoriteMovie={handleFavoriteMovie}
                />
              ))}
          {movieDB.length <= 0 && <PageNotFound />}
        </div>
      </main>
      {movieDB.length > 0 && (
        <div className="pagination">
          {page > 1 ? (
            <span
              className="previous"
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              <FaArrowLeft />
            </span>
          ) : (
            ""
          )}

          {[...Array(movieDB.length / (movieDB.length / 5))].map((_, i) => {
            return (
              <span
                key={i}
                className={`${i + 1 === page ? "selected__page" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}{" "}
              </span>
            );
          })}
          {page < movieDB.length / 20 ? (
            <span
              className="next"
              onClick={() => {
                if (page < movieDB.length / 20) setPage(page + 1);
              }}
            >
              <FaArrowRight />
            </span>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
