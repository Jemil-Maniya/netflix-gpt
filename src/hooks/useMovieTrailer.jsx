import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
 

  // fetch trailer video && updating the store with trailer video data
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    ); // this Api is only for fetch the video but which video should be fetched is written in the movieId
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter(
      (videos) => videos.type === "Trailer"
    );
    // console.log(filterData)
    const trailer = filterData.length ? filterData[2] : json.results[0];
    dispatch(addTrailerVideos(trailer));
    // console.log(trailer);
    
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
    // getMovieVideo()
  }, []);
};

export default useMovieTrailer;
