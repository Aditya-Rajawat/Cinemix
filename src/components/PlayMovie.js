import { useParams } from "react-router-dom";
import usePlayMovieTrailer from "../hooks/usePlayMovieTrailer";

const PlayMovie = () => {
  const { movieId } = useParams();
  const movie_trailer = usePlayMovieTrailer(movieId);

  return (
    <div className="relative -mt-20 bg-[#141414] h-full w-full">
      <iframe
        className="h-full w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movie_trailer?.key +
          "?si=EEhg3SoYNxZ1f4gB&autoplay=1&modestbranding=1&controls=1"
        }
      ></iframe>
      <div className="bg-black h-[5px] w-full"></div>
    </div>
  );
};

export default PlayMovie;
