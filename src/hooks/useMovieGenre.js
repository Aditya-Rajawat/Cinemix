import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addMovieGenre } from "../utils/movieSlice";

const useMovieGenre=()=>{

    const dispatch=useDispatch();
    const genreMovies=useSelector((store)=>store.movie.genreMovies);

    const getGenreList=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+ API_KEY +"&language=en-US",API_OPTIONS);
        const json=await data.json();
        dispatch(addMovieGenre(json));
    }

    useEffect(()=>{
        !genreMovies && getGenreList();
    },[])
}

export default useMovieGenre;