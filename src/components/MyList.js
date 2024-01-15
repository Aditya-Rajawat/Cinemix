import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../utils/languageConstants";
import MoreInfo from "./MoreInfo";



const MyList=()=>{

    let myListMovies=useSelector((store)=>store.movie.myListMovies);
    const langKey = useSelector((store) => store.config.lang);
    const moreInfo=useSelector((store)=>store.config.moreInfo);
    const movie=useSelector((store)=>store.config.movie);
    myListMovies=Array.from(myListMovies);

    return (
        <>
        {moreInfo && movie && <MoreInfo movie={movie}/>}
        <div className="bg-[#141414] w-full h-screen text-white -mt-20">
        <div className="font-white absolute top-0 z-10 text-white inline-flex items-center font-bold text-xl md:text-3xl mx-5 md:mx-12 mt-28 md:my-20">{lang[langKey]?.myList}</div>
        <div className="absolute z-10 flex flex-wrap my-40 px-5 md:px-12 justify-center bg-[#141414]">
            {myListMovies.map((movie)=>(
                <div key={movie?.id} className="mb-10 md:mb-20">
                    <MovieCard backdrop_path={movie?.backdrop_path} movie={movie}/>
                </div>
            ))}
        </div>
        </div>
        </>
    )
};



export default MyList;