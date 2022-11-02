import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderedMovies = "";
  let renderedShows = "";

  if (movies.Response === "True") {
    renderedMovies = movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ));
  } else {
    renderedMovies = (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  }

  if (shows.Response === "True") {
    renderedShows = shows.Search.map((show, index) => (
      <MovieCard key={index} data={show}></MovieCard>
    ));
  } else {
    renderedShows = (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  }

  return (
    <div className="moviw-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderedMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderedShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
