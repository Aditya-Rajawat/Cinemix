import { useDispatch } from "react-redux";
import { LANGUAGES_SUPPORTED } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const LanguageDropdown = () => {
    const dispatch=useDispatch();

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <select className="absolute bg-transparent text-white text-sm font-semibold right-24 md:right-40 top-[23px] border-[1px] border-gray-500 rounded-[4px] px-2" onChange={(e)=>handleLanguageChange(e)}>
      {LANGUAGES_SUPPORTED.map((language) => (
        <option className="text-black border-b-2" key={language.identifier} value={language.identifier}>{language?.name}</option>
      ))}
    </select>
  );
};

export default LanguageDropdown;