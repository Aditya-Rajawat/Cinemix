import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProfileContext from "../utils/ProfileContext";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const AccountDropdown=()=>{

    const navigate=useNavigate();

    const {setProfile}=useContext(ProfileContext);
    const langKey=useSelector((store)=>store.config.lang);

    const handleSignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    const handleProfilePage=()=>{
        setProfile(true);
    }
    

    return (
        <div className=" absolute right-2 top-20 bg-black h-auto w-60 bg-opacity-80 border-[0.3px] border-[#2b2a2a]">
            <ul className="text-center">
                <li className="text-white text-sm hover:underline p-4 hover:cursor-pointer" onClick={handleProfilePage}>{lang[langKey]?.manageProfiles}</li>
            </ul>
            <ul className="border-t-[1.5px] border-[#2b2a2a] w-full hover:cursor-pointer">
                <li className="text-white font-semibold font-sans text-sm text-center hover:underline p-4" onClick={handleSignout}>{lang[langKey]?.signOutOfNetflix}</li>
            </ul> 
        </div>
    )
};

export default AccountDropdown;