import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
  return (
    <div className='w-47.5 p-2'>
        <img className='w-40' alt='cardIMG' src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard