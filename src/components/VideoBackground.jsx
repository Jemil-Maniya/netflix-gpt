import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo); // we can also use useState hook here
  console.log(movieId)
  // console.log(trailerVideo?.key)

  useMovieTrailer(movieId);

  return (
    <div className="w-auto">
      <iframe
        className="w-full aspect-video"
        src={
          
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
