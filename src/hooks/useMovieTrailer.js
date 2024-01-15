import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer=(movie_id)=>{

    const dispatch=useDispatch();
    const trailerMovies=useSelector((store)=>store.movie.trailerMovies);
    

    const getMovieVideo=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);
        const json=await data.json();
        const filterData=json?.results.filter((video)=>video.type==="Trailer");
        const trailer=filterData.length ? filterData[0] : json?.results[0];
        dispatch(addTrailerMovies(trailer));
    };

    useEffect(()=>{
        !trailerMovies && getMovieVideo();
    },[]);


};

export default useMovieTrailer;
