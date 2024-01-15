import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO_LOGIN } from "../utils/constants";


const Header = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    // unsubscribe when component unmounts
    return ()=>unsubscribe();

  }, []);

  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black to-transparent w-[100%] h-[100%] opacity-75"></div>
      <div className="absolute px-4 py-1">
        <img
          className="h-[90px] w-52 hover:cursor-pointer "
          src={NETFLIX_LOGO_LOGIN}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
