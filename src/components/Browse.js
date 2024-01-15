import { useState } from "react";
import BrowseHeader from "./BrowseHeader";
import Profile from "./Profile";
import ProfileContext from "../utils/ProfileContext";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useMovieGenre from "../hooks/useMovieGenre";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";

const Browse = () => {
  const [isProfile, setProfile] = useState(false);
  const location=useLocation();
  const {movieId}=useParams();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useMovieGenre();


  return (
    <div className="">
      <ProfileContext.Provider value={{ Profile: isProfile, setProfile }}>
        {isProfile && <Profile />}
        {!isProfile && (
          <div>
            <BrowseHeader />
            <Outlet/>
            {(location?.pathname!==`/browse/play/${movieId}`)?
              <Footer/> : <></>
            }
          </div>
        )}
      </ProfileContext.Provider>
    </div>
  );
};

export default Browse;

{
  /*
- Main container
    - video background
    - video title
- Secondary Container
    - movieLists * n
        - cards * n

*/
}
