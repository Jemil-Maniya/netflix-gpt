import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies)

  return (
    (movies.nowPlayingMovies && (
      <div className="  bg-black">
        <div className="-mt-65 pl-5 relative z-20 ">
          <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movie={movies.topRatedMovies} />
          <MovieList title={"Popular"} movie={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movie={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movie={movies.nowPlayingMovies} />
        </div>

        {/* <MovieList title={"Now Playing"} movie={movies[1]} />
        <MovieList title={"Now Playing"} movie={movies[2]} /> */}
      </div>
    )
  )
)
};

export default SecondaryContainer;

{
  /* 

          MovieList - Popular
            - MovieCards*n
          MovieList - NowPlaying
          MovieList - Trending
          MovieList - Horror

      
      */
}
