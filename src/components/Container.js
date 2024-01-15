import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Container=()=>{
    const bgBlur=useSelector((store)=>store.config.bgBlur);

    return (
        <>
       {/* {bgBlur &&  <div className="bg-black bg-opacity-50 backdrop-brightness-50 absolute z-50 h-[1500px] inset-0 w-full">Hello</div>} */}
        <div>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
        </>
    )
};

export default Container;