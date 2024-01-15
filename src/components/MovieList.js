import { useRef, useState } from "react";
import MovieCard, { withTopTenLabel } from "./MovieCard";
import arrow_back from "../utils/arrow_back.svg";
import arrow_forward from "../utils/arrow_forward.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  const [xscroll, setXscroll] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const slider = useRef();

  const bgBlur=useSelector((store)=>store.config.bgBlur);


  const handleXScroll = () => {
    setXscroll(true);
  };
  const handleSetCardHover = () => {
    setCardHover(true);
  };
  const handleResetCardHover = () => {
    setCardHover(false);
  };

  const TopTenMovieCard=withTopTenLabel(MovieCard);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 5,
    swipeToSlide: false,
    dragToSlide: true,
    swipe: true,
    allowTouchMove: true,
    variableWidth: true,
    variableHeight:true
  };
  

  return (
    <div className="overflow-x-clip overflow-y-visible no-scrollbar md:mb-10 md:-mt-20">
      <h1 className="text-white my-2 mx-5 md:mx-9 md:px-4 font-bold text-lg">{title}</h1>
      <div
        id="check"
        className="flex"
        onMouseUpCapture={() => setXscroll(true)}
        onMouseOver={handleSetCardHover}
        onMouseLeave={handleResetCardHover}
      >
        <div
          className={`flex w-screen -mb-32 md:mb-0 ${
            !xscroll ? "ml-9 pl-4 transition-all" : ""
          }`}
          onScroll={handleXScroll}
        >
          <Slider
            className={`w-screen h-[205.5px] overflow-x-clip slick-list z-10 hover:z-20`}
            ref={slider}
            {...settings}
          >
            {movies.map((movie) => (
              movie?.popularity > 1000 ? <TopTenMovieCard key={movie?.id} backdrop_path={movie?.backdrop_path} movie={movie}/> : <MovieCard key={movie?.id} backdrop_path={movie?.backdrop_path} movie={movie}/>
            ))}
          </Slider>
        </div>
        {xscroll && !bgBlur && cardHover && (
  <div
    onClick={() => slider?.current?.slickPrev()}
    className="h-[85.69px] md:h-[137px] w-12 absolute flex items-center justify-center backdrop-brightness-50 z-100"
  >
    <img
      className="w-12 h-10 hover:transition-all hover:delay-75 hover:scale-125"
      src={arrow_back}
    />
  </div>
)}
{cardHover && !bgBlur && (
  <div
    onClick={() => {
      slider?.current?.slickNext();
      handleXScroll();
    }}
    className="h-[85.69px] md:h-[137px] w-14 absolute right-0 flex items-center justify-center backdrop-brightness-50 z-100"
  >
    <img
      className="w-14 h-10 hover:transition-all hover:delay-75 hover:scale-125"
      src={arrow_forward}
    />
  </div>
)}
      </div>
    </div>
  );
};

export default MovieList;



{/* <Slider
            className={`w-screen h-[205.5px] overflow-x-clip slick-list z-40 hover:z-100`}
            ref={slider}
            {...settings}
          >
            {movies.map((movie) => (
              movie?.popularity > 1000 ? <TopTenMovieCard backdrop_path={movie?.backdrop_path} movie={movie}/> : <MovieCard backdrop_path={movie?.backdrop_path} movie={movie}/>
            ))}
          </Slider> */}


// {xscroll && cardHover && (
//   <div
//     onClick={() => slider?.current?.slickPrev()}
//     className="h-[137px] w-12 absolute flex items-center justify-center backdrop-brightness-50 z-100"
//   >
//     <img
//       className="w-12 h-10 hover:transition-all hover:delay-75 hover:scale-125"
//       src={arrow_back}
//     />
//   </div>
// )}
// {cardHover && (
//   <div
//     onClick={() => {
//       slider?.current?.slickNext();
//       handleXScroll();
//     }}
//     className="h-[137px] w-14 absolute right-0 flex items-center justify-center backdrop-brightness-50 z-100"
//   >
//     <img
//       className="w-14 h-10 hover:transition-all hover:delay-75 hover:scale-125"
//       src={arrow_forward}
//     />
//   </div>
// )}