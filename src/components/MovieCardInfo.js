import { useDispatch, useSelector } from "react-redux";
import bulletIcon from "../utils/bullet_icon.svg";
import { addToMyList, removeFromMyList } from "../utils/movieSlice";
import checkMarkIcon from "../utils/checkMark.svg";
import { useState } from "react";
import playButton from "../utils/play-button-svgrepo-com.svg";
import { Link } from "react-router-dom";
import expandIcon from "../utils/expand_more.svg";
import { addMovie, setMoreInfo } from "../utils/configSlice";

const MovieCardInfo = ({ movie }) => {
  const [addHover, setAddHover] = useState(false);
 

  const genreMovies = useSelector((store) => store.movie.genreMovies);
  const myList = useSelector((store) => store.movie.myListMovies);

  const dispatch = useDispatch();
  const { genre_ids, overview, original_title, adult,id } = movie;

  const genreObj = genreMovies?.genres.filter((genre) =>
    genre_ids.includes(genre?.id)
  );
  let genreNames = genreObj.map((genre) => genre?.name);
  genreNames = genreNames.length >= 4 ? genreNames.slice(0, 4) : genreNames;

  const handleMyList = () => {
    !myList.has(movie)
      ? dispatch(addToMyList(movie))
      : dispatch(removeFromMyList(movie));
  };

  const handleMoreInfo=()=>{
   dispatch(addMovie(movie));
   dispatch(setMoreInfo(true)) 
  }


  return (
    <>


    <div className={`bg-[#181818] w-auto h-auto rounded-b-[4px] shadow-black shadow-lg`}>
      <div className="px-4 py-1">
        <div className="flex items-center my-2">
        <Link to={"/browse/play/" + movie?.id}>
        <div className="w-[26px] h-[26px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-300 mr-2">
          <img
                  className=" w-[14px] ml-[2px] h-4 transition-all delay-75"
                  src={playButton}
                />
          </div>
        </Link>
          <div
            className="border-2 w-7 h-7 rounded-full bg-[#272727] border-[#808080] flex items-center justify-center hover:border-white mr-2"
            onClick={handleMyList}
            onMouseOver={() => setAddHover(true)}
            onMouseLeave={() => setAddHover(false)}
          >
            {addHover && (
              <div className="w-36 p-2 flex items-center justify-center -mt-16 absolute z-40 h-5 rounded-sm bg-gray-300">
                <p className="font-semibold text-[10px] text-black">
                  {!myList.has(movie)
                    ? "Add to My List"
                    : "Remove from My List"}
                </p>
              </div>
            )}
            <p className="text-white font-thin text-2xl mb-[10px] mt-1">
              {myList.has(movie) ? (
                <img
                  className="mt-1 w-5 h-5 transition-all delay-75"
                  src={checkMarkIcon}
                />
              ) : (
                "+"
              )}
            </p>
          </div>
          <div
            className="border-2 w-7 h-7 rounded-full bg-[#272727] border-[#808080] flex items-center justify-center hover:border-white" onClick={handleMoreInfo}>
              <img className="mt-[2px] w-11" src={expandIcon}/>
            </div>
          <div className="absolute md1:right-4 md1:top-[155px] right-2 top-2">
          {adult ? (
            <div className="border-[1.5px] border-white md1:border-[#808080] text-white md1:text-[#808080] w-4 h-4 flex items-center justify-center">
              <p className="text-[10px] font-bold">A</p>
            </div>
          ) : (
            <div className="border-[1px] border-white md1:border-[#808080] text-white md1:text-[#808080] w-10 md:w-14 h-4 md:h-4 flex items-center justify-center">
              <p className="text-[8px] md:text-[10px] font-bold">U/A 16+</p>
            </div>
          )}
          </div>
        </div>
        <h1 className="text-white font-bold mr-4 text-xs md:text-lg">{original_title}</h1>
        <p className="text-white text-[8px] truncate">{overview}..</p>
      </div>
      <div className="text-white flex p-4 -mt-4">
        {genreNames.map((genreName, idx) => (
          <p key={idx} className="text-[2px] md:text-[10px] mr-1 flex items-center justify-center md:flex md:items-center md:justify-center">
            {genreName}
            {idx !== genreNames.length - 1 ? (
              <img className="h-1 w-1 mx-2" src={bulletIcon} />
            ) : (
              <></>
            )}
          </p>
        ))}
      </div>
    </div>
    </>
  );
};

export default MovieCardInfo;
