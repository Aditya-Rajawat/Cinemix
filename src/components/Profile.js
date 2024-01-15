import { Link } from "react-router-dom";
import { PROFILE_ICON } from "../utils/constants";
import { useSelector } from "react-redux";
import { useContext } from "react";
import ProfileContext from "../utils/ProfileContext";


const Profile = () => {

  const user=useSelector((store)=>store.user);
  const {displayName}=user;
  const {setProfile}=useContext(ProfileContext);

  const handleProfilePage=()=>{
    setProfile(false);
  }

  
  return (
    <div className="w-screen h-screen bg-neutral-900 absolute flex z-20">
      <div className="absolute h-20 w-full bg-gradient-to-b from-black to-transparent"></div>
      <div className="m-auto text-center">
        <h1 className="text-white font-semibold text-5xl hover:cursor-default">{displayName}'s Watching..</h1>
        <div className="flex justify-center my-10">
            <Link to="/browse" onClick={handleProfilePage}>
            <div className="rounded-lg hover:cursor-pointer">
          <img
            className="h-[136px] w-[136px] rounded-lg border-4 border-transparent hover:border-gray-300 hover:border-4"
            src={PROFILE_ICON}
          />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
