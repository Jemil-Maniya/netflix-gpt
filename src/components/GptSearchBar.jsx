import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null);
  // Search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (movie) => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get movie results
    const gptQuery =
      "Act as a movie recommendation system for the query:" +
      searchText.current.value +
      "only give me names of 5 movie, comma seprated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Herapheri ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // eroor handling
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie i will search TMDB API
    const prmoiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    // [Promise, Promise, Promise, Promise, Promise ]

    const tmdbResults = await Promise.all(prmoiseArray);
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 text-white"
          placeholder="what would you like today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
