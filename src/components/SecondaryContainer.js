import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies=useSelector((store)=>store.movie.popularMovies);
  const topRatedMovies=useSelector((store)=>store.movie.topRatedMovies);
  const upcomingMovies=useSelector((store)=>store.movie.upcomingMovies);

  if(movies===null) return <Shimmer/>

  if (!movies || !popularMovies || !topRatedMovies || !upcomingMovies) return;

  return (
    <div className="bg-[#141414] -my-2 relative z-30 pt-28 md:pt-0 md:pb-6">
        <div className="absolute bg-gradient-to-b from-black top-0 left-0 z-20 h-20 w-[100%]"></div>
        <div className="relative z-40 -top-24">
        <MovieList rowId='1' title={"Now Playing"} movies={movies} />
        <MovieList rowId='2' title={"Popular Movies"} movies={popularMovies} />
        <MovieList rowId='3' title={"Top Rated"} movies={topRatedMovies} />
        <MovieList rowId='4' title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
    </div>
  );
};

export default SecondaryContainer;
