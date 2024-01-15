import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailerMovies = useSelector((store) => store.movie?.trailerMovies);
  useMovieTrailer(movie_id);

  return (
    <div className="w-screen relative -z-10 top-0 left-0"> 
      <div className="w-screen h-auto absolute bg-opacity-0"></div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerMovies?.key +
          "?si=EEhg3SoYNxZ1f4gB&autoplay=1&modestbranding=1&controls=0&mute=1"
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
