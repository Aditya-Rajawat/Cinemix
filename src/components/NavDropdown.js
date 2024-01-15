import { useSelector } from "react-redux";
import dropArrow from "../utils/dropArrow.svg";
import lang from "../utils/languageConstants";
import { Link } from "react-router-dom";

const NavDropdown=()=>{

    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className=" absolute left-0 top-6 bg-black h-auto w-40 border-t-white border-t-2 bg-opacity-80 border-[0.3px] border-[#2b2a2a]">
            <ul className="text-center hover:cursor-pointer  hover:bg-[#68686817]">
                <Link to="/browse"><li className="text-gray-300 hover:text-white text-[10px] p-2 hover:cursor-pointer">{lang[langKey]?.home}</li></Link>
            </ul>
            <ul className="w-full hover:cursor-pointer hover:bg-[#68686817]">
                <Link to="/browse/my-list"><li className="text-gray-300 hover:text-white font-semibold font-sans text-[10px] text-center p-2">{lang[langKey]?.myList}</li></Link>
            </ul> 
            <ul className="w-full hover:cursor-pointer  hover:bg-[#68686817]">
            <Link to="/browse/gpt-search"><li className="text-gray-300 hover:text-white font-semibold font-sans text-[10px] text-center p-2">{lang[langKey]?.gptSearch}</li></Link>
            </ul> 
        </div>
    )
};

export default NavDropdown;