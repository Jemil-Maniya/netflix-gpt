import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  // const gpt = useSelector(store=> store.gpt)
  // const {movieResults, movieNames} = gpt

  const {moviResults, movieNames} = useSelector(store=> store.gpt)
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-86">
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList key={movieNames} title={movieNames} movie={moviResults[index]} />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestion