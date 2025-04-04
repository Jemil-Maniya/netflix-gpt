import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    // this is a gpt search page don't be confused
    <div>
          <div className='fixed -z-10 '>
                <img 
                  src={BACKGROUND}
                  alt="loginPage-img"
                />
              </div>
        <GptSearchBar />
        <GptMovieSuggestion />  
    </div>
  )
}

export default GptSearch