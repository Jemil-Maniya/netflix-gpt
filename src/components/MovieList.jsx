import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movie}) => {
    // console.log(movie.poster_path)
  return (
    <div className="movieList p-2 ">
      <h1 className="text-lg md:text-3xl text-white pl-3 py-4">{title} </h1>
      <div className="flex overflow-x-scroll scroll-smooth  no-scrollbar">
        <div className="flex">
          {movie && movie.length > 0 ? ( movie.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          )) ) : ("errror")}
        </div>
      </div>

      {/* <MovieCard posterPath={movie[0].poster_path} />
      <MovieCard posterPath={movie[1].poster_path} /> */}
    </div>
  );
}

export default MovieList