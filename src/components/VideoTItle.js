import { Link } from "react-router-dom";
import playIcon from "../utils/play-button-svgrepo-com.svg";
import { useState } from "react";
import MoreInfo from "./MoreInfo";
import moreInfoIcon from "../utils/MoreInfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, setMoreInfo } from "../utils/configSlice";

const VideoTitle = (props) => {

  const movie=useSelector((store)=>store.config.movie);
  const moreInfo=useSelector((store)=>store.config.moreInfo);
  const dispatch=useDispatch();
 

  const { original_title, overview, id } = props?.mainMovie;

  const handleMoreInfo=()=>{
    dispatch(addMovie(props?.mainMovie));
    dispatch(setMoreInfo(true))
  };

  return (
    <>
    <div className="-z-1 absolute top-[155px] md:top-60 text-white font-bold md:px-4 mx-5 md:mx-9">
      <h1 className="text-white font-bold text-xl md:text-6xl">
        {original_title}
      </h1>
      <p className="text-white text-[8px] md:text-[16px] w-80 md:w-96 my-2 md:my-4 font-normal">
        {overview}
      </p>
      <div className="flex items-center">
        <Link to={"/browse/play/" + id}>
          <button className="w-[70px] md:w-[120px] h-[30px] md:h-[44px] bg-gray-100 text-black text-[12px] md:text-[18px] rounded-md flex items-center justify-center hover:bg-gray-400">
            <img className="h-3 md:h-5 w-3 md:w-5 mr-1" src={playIcon} />
            Play
          </button>
        </Link>
          <button className="bg-[#4c4c4db3] w-[110px] md:w-[166px] h-[30px] md:h-[44px] text-[12px] md:text-base font-semibold rounded-md bg-opacity-200 mx-2 flex items-center justify-center hover:bg-[#58585856]" onClick={handleMoreInfo}>
            <img className="h-5 md:h-7 w-5 md:w-7 fill-white mr-2" src={moreInfoIcon}/>
            More Info
          </button>
      </div>
    </div>
    {moreInfo && movie && <MoreInfo movie={movie}/>}
    </>
  );
};

export default VideoTitle;
