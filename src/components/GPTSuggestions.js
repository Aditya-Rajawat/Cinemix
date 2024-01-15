import { useSelector } from "react-redux";
import MovieCard, { withTopTenLabel } from "./MovieCard";
import lang from "../utils/languageConstants";
import MoreInfo from "./MoreInfo";
import LoadingSpinner from "./LoadingSpinner";
import searchImg from "../utils/search.png";

const GPTSuggestions=({buttonClicked})=>{

    const {movieNames,movieResults}=useSelector((store)=>store.gpt);
    const langKey=useSelector((store)=>store.config.lang);
    const moreInfo=useSelector((store)=>store.config.moreInfo);
    const movie=useSelector((store)=>store.config.movie);
    
    console.log(buttonClicked)

    if((!movieNames || !movieResults) && buttonClicked) return <LoadingSpinner/>;
    if(!movieNames || !movieResults) return <img className="absolute z-100 w-60 h-60 left-[580px] top-60" src={searchImg}/>
    console.log(movieNames,movieResults)

    const TopTenMovieCard=withTopTenLabel(MovieCard);

    return (

        <>
        {moreInfo && movie && <MoreInfo movie={movie}/>}
        <div className="bg-[#141414] w-full md:w-full h-full md:h-screen text-white -mt-4 mb-20">
        <div className="font-white absolute top-40 z-10 text-white inline-flex items-center font-bold text-xl md:text-3xl mx-5 md:mx-12">{lang[langKey]?.suggestedMovies}</div>
        <div className="absolute z-10 flex flex-wrap md:left-0 my-40 px-4 md:px-12 bg-[#141414] py-16 justify-center">
        {movieResults.map((movieList)=>(
                    movieList.map((movie)=>
                        (
                            <div className="mb-10 md:mb-20">
                            {movie?.popularity > 1000 ? <TopTenMovieCard key={movie?.id} backdrop_path={movie?.backdrop_path} movie={movie}/> : <MovieCard key={movie?.id} backdrop_path={movie?.backdrop_path} movie={movie}/>}
                            </div>
                        )
                    )
                ))}
        </div>
        </div>
        </>
    )
};

export default GPTSuggestions;