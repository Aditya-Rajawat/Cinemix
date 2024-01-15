import { useDispatch, useSelector } from "react-redux";
import closeIcon from "../utils/closeX_icon.svg"
import { MOVIE_CARD_IMG_CDN } from "../utils/constants";
import playIcon from "../utils/play-button-svgrepo-com.svg"
import checkMarkIcon from "../utils/checkMark.svg"
import { useState } from "react";
import { addToMyList, removeFromMyList } from "../utils/movieSlice";
import { Link } from "react-router-dom";
import { setMoreInfo } from "../utils/configSlice";

const MoreInfo=({movie})=>{
    const [addHover, setAddHover] = useState(false);
    const dispatch=useDispatch();

    const {backdrop_path,vote_average,release_date,adult,overview,genre_ids}=movie;

    const myList = useSelector((store) => store.movie.myListMovies);
    const genreMovies=useSelector((store)=>store.movie.genreMovies);
    const genreObj=genreMovies?.genres.filter((genre)=>genre_ids.includes(genre?.id));
    let genreNames = genreObj.map((genre) => genre?.name);
    genreNames = genreNames.length >= 4 ? genreNames.slice(0, 4) : genreNames;

    genreNames=genreNames.join(",");

    const handleCloseInfo=()=>{
        dispatch(setMoreInfo(false))
    };

    const handleMyList = () => {
        !myList.has(movie)
          ? dispatch(addToMyList(movie))
          : dispatch(removeFromMyList(movie));
      };

    return (
        <div className="fixed overflow-y-scroll no-scrollbar inset-0 bg-black bg-opacity-50 font-bold text-white flex items-center justify-center z-100 backdrop-blur-sm">
            <div className="m-auto w-11/12 md1:w-[850px] relative h-auto rounded-[4px] mt-20">
                <button className="absolute md1:right-4 md1:top-4 top-4 right-10 rounded-full bg-[#292929] hover:bg-[#383838] p-[6px]" onClick={handleCloseInfo}>
                    <img src={closeIcon}/>
                </button>
                <div className="w-11/12 m-auto md1:w-[850px] md1:h-[478px] rounded-[4px]">
                    <div className="z-100 bg-gradient-to-t from-[#141414] absolute top-[318px] h-40 w-11/12 md1:w-[850px]"></div>
                    <img className="object-cover rounded-[4px] h-[478px]" src={MOVIE_CARD_IMG_CDN + backdrop_path}/>
                    <div className="absolute top-[370px] px-10 z-200 flex items-center">
                        <Link to={"/browse/play/" + movie?.id}>
                            <button className="w-[70px] md1:w-[120px] h-[30px] md1:h-[44px] bg-gray-100 text-black text-[12px] md1:text-[18px] rounded-md flex items-center justify-center hover:bg-gray-400">
                                    <img className="h-3 md1:h-5 w-3 md1:w-5 mr-1" src={playIcon} />
                                        Play
                            </button>
                        </Link>
                        <div
                            className="border-2 w-10 h-10 ml-3 rounded-full bg-[#272727] bg-opacity-80 border-[#808080] flex items-center justify-center hover:border-white hover:bg-[#a3a3a3] hover:cursor-pointer hover:bg-opacity-25"
                            onClick={handleMyList}
                            onMouseOver={() => setAddHover(true)}
                            onMouseLeave={() => setAddHover(false)}
                        >
                            {addHover && (
                                <div className="w-48 h-10 p-2 flex items-center justify-center -mt-28 shadow-lg shadow-black absolute z-40 rounded-[4px] bg-gray-300">
                                    <p className="font-bold text-md text-black">
                                    {!myList.has(movie)
                                        ? "Add to My List"
                                        : "Remove from My List"}
                                    </p>
                                </div>
                            )}
                            <p className="text-white font-thin text-4xl mb-[12px] mt-1">
                                {myList.has(movie) ? (
                                    <img
                                    className="mt-2 w-6 h-6 transition-all delay-75"
                                    src={checkMarkIcon}
                                    />
                                ) : (
                                    "+"
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#141414] w-11/12 m-auto md1:w-[850px] h-auto md1:grid md1:grid-cols-10 pt-6 px-6 md1:px-10">
                    <div className="md1:col-span-6 h-auto mb-4">
                       <div className="flex items-center">
                            <p className={`font-bold text-md md1:text-lg mr-3 ${vote_average*10>70 ? "text-green-500": "text-orange-500"}`}>{vote_average*10}% Match</p>
                            <p className="text-zinc-500 mr-3 font-bold text-md md1:text-lg">{release_date.slice(0,4)}</p>
                            <p className="border-[1px] mr-3 border-zinc-500 text-white rounded-[3px] w-8 flex items-center justify-center text-xs">HD</p>
                       </div>
                       <div className="flex items-center mt-1">
                       {adult ? (
                            <div className="border-[1px] border-[#808080] text-white w-4 md1:w-10 h-4 md1:h-6 flex items-center justify-center">
                            <p className="text-[16px] font-bold">A</p>
                            </div>
                        ) : (
                            <div className="border-[1px] border-[#808080] text-white w-10 md1:w-[70px] h-4 md1:h-6 flex items-center justify-center">
                            <p className="text-[8px] md1:text-[14px] font-bold">U/A 16+</p>
                            </div>
                        )}
                        <p className="text-gray-100 font-bold ml-3">language,</p>
                        <p className="text-gray-100 font-bold">tobacco use</p>
                       </div>
                       <p className="text-white text-sm font-medium mt-8 tracking-light">{overview}</p>
                    </div>
                    <div className="md1:col-span-4 md1:h-20 md1:px-10">
                        <div className="">
                            <p className="text-zinc-500 text-[14px] md1:text-[16px] font-medium">Genres:</p><p className="text-white text-[14px] md1:text-[16px] font-medium">{genreNames}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MoreInfo;