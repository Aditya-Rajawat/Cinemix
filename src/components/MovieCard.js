import { useState } from "react";
import { MOVIE_CARD_IMG_CDN } from "../utils/constants";
import MovieCardInfo from "./MovieCardInfo";




const MovieCard = ({ backdrop_path, movie}) => {
  const [hover, setHover] = useState(false);

  if(backdrop_path===null) return;

  return (
    <>
    <div
      className={`w-[145px] md:w-[243px] h-[85.69px] md:h-[137px] mr-[1.5px] md:mr-[5px] ${hover? "scale-150 transition-transform -translate-y-16 cursor-pointer shadow-black shadow-lg":""}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className="w-[145px] md:w-[243px] h-[85.69px] md:h-[137px] object-cover rounded-[2px] hover:rounded-t-[4px] hover:rounded-b-none"
        src={MOVIE_CARD_IMG_CDN + backdrop_path}
      />
      {hover && <MovieCardInfo movie={movie}/>}
    </div>
    
    </>
  );
};

export const withTopTenLabel = (MovieCard) => {
  return (props) => {
    // console.log("props1", props);
    const { backdrop_path } = props?.movie;

    return (
      <div className="">
        <label className="absolute  font-bold flex items-center justify-center text-white text-[8px] h-5 w-7 bg-red-600 ml-[264px] md:ml-[215px] rounded-e-[2px]">
          TOP
        </label>
        <label className="absolute  flex items-center justify-center bg-red-600 text-white font-extrabold text-sm ml-[264px] md:ml-[215px]  mt-[13px] h-4 w-7">
          10
        </label>
        <label
          className ="w-1 h-1 absolute mt-[29px] ml-[264px] md:ml-[215px] border-t-[0px] border-t-red-600 border-r-[28px] border-r-red-600 border-b-[10px] border-b-transparent"
        ></label>
        <MovieCard backdrop_path={backdrop_path} movie={props?.movie} />
      </div>
    );
  };
};

export default MovieCard;



