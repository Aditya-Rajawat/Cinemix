import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTItle";
import MoreInfo from "./MoreInfo";

const MainContainer=()=>{

    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);
    const movie=useSelector((store)=>store.config.movie);
    const moreInfo=useSelector((store)=>store.config.moreInfo);

    if(!movies) return;

    const mainMovie=movies[5]; 
    const {id}=mainMovie;

    return (
        <>
        <div className="-mt-20 bg-gradient-to-r from-black overflow-x-clip">
            <VideoTitle mainMovie={mainMovie}/>
            <VideoBackground movie_id={id}/>
            
        </div>
        {moreInfo && movie && <MoreInfo movie={movie}/>}  
        </> 
    )
};

export default MainContainer;
