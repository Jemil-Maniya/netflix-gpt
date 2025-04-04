import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    // this is a gpt search page don't be confused
    <>
      <div className="fixed -z-10 ">
        <img className='h-screen md:h-[100%] object-cover' src={BACKGROUND} alt="loginPage-img" />
      </div>
      <div c>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
}

export default GptSearch