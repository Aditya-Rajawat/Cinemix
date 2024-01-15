import { useState } from "react";
import { NETFLIX_LOGO_BROWSE } from "../utils/constants";
import { PROFILE_ICON } from "../utils/constants";
import dropArrow from "../utils/dropArrow.svg";
import AccountDropdown from "./AccountDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import LanguageDropdown from "./LangaugeDropdown";
import lang from "../utils/languageConstants";
import NavDropdown from "./NavDropdown";

const BrowseHeader = () => {
  const [dropdown, setDropdown] = useState(false);
  const [browseDropdown,setBrowseDropdown]=useState(false);
  const [scroll, setScroll] = useState(false);
  const [width,setWidth]=useState(window.innerWidth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const langKey = useSelector((store) => store.config.lang);

  const setHover = () => {
    setDropdown(true);
  };
  const resetHover = () => {
    setDropdown(false);
  };

  window.onscroll = () => {
    setScroll(true);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setScroll(false);
    }
  });

  const setbrowseDropdown=()=>{
    setBrowseDropdown(true)
  };
  const resetbrowseDropdown=()=>{
    setBrowseDropdown(false);
  }

  useEffect(() => {
    window.addEventListener("resize",()=>setWidth(window.innerWidth))
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`flex md:flex h-[68px] md:justify-between items-center md:items-center z-100 w-full md:w-full -mt-[3px] md:-mt-[5px] sticky top-0 bg-gradient-to-b from-black md:bg-gradient-to-b md:from-black ${
        scroll ? "backdrop-brightness-0" : "backdrop-brightness-100"
      }`}
    >
      <div className="bg-gradient-to-b from-black to-transparent  h-20"></div>
      <div className="absolute md:px-4 py-1 mx-2 md:mx-6">
        <img
          className="h-[50px] hover:cursor-pointer object-cover"
          src={NETFLIX_LOGO_BROWSE}
          alt="logo"
        />
      </div>
     {width>=1024 ? ( 
     <div className="w-20 h-30 flex md:flex items-center md:items-center justify-center md:justify-center">
          <ul className="absolute left-40 md:left-48 font-bold text-sm font-sans flex items-center top-5 md:top-6">
          <Link to="/browse">
            <li
              className="mr-6 hover:cursor-pointer text-gray-300 hover:text-white"
            >
              {lang[langKey]?.home}
            </li>
          </Link>
          <Link to="/browse/my-list">
            <li
              className="mr-6 text-gray-300 hover:text-white hover:cursor-pointer"
            >
              {lang[langKey]?.myList}
            </li>
          </Link>
          <Link to="/browse/gpt-search">
            <li
              className="mr-6 text-gray-300 hover:text-white hover:cursor-pointer"
            >
              {lang[langKey].gptSearch}
            </li>
          </Link>
        </ul>
      </div>):  (
          <div className="flex items-center absolute top-5 ml-32 text-white font-bold hover:cursor-pointer" onMouseOver={setbrowseDropdown} onMouseLeave={resetbrowseDropdown}>
            <p className="text-sm">Browse</p>
            <img src={dropArrow}/>
            {browseDropdown && <NavDropdown/>}
          </div>
        )}
     
      <LanguageDropdown />
      <div
        className="right-2 md:right-16 absolute flex items-center pb-10 pt-10"
        onMouseEnter={setHover}
        onMouseLeave={resetHover}
      >
        <img
          className="h-[32px] w-[32px] object-cover rounded-[3.5px]"
          src={PROFILE_ICON}
        />
        <img
          className={`h-6 w-6 mx-1 pointer-events-none ${
            dropdown
              ? "duration-500 transition-all transform rotate-180"
              : "transform rotate-0 transition-all duration-500"
          }`}
          src={dropArrow}
        />
        {dropdown && <AccountDropdown />}
      </div>
    </div>
  );
};
export default BrowseHeader;
