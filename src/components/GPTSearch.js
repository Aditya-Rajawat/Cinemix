import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearch=()=>{

    const searchText=useRef(null);
    const [showSearch,setShowSearch]=useState(false);
    const [buttonClicked,setButtonClicked]=useState(false);
    const langKey=useSelector((store)=>store.config.lang);
    const dispatch=useDispatch();

    const searchMovieinTMDB=async(movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json=await data.json();
        return json?.results;
    }

    const handleSearch=async()=>{
        const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give the name of 5 movies, comma separated like the example result given ahead. Example Result: Golmaal,Jawan,Hero,URI,Baaghi";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies=gptResults.choices[0]?.message?.content.split(",");

    const promiseArray=gptMovies.map((movie)=>searchMovieinTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResults}));
    }

    return (
        <div className="text-white transition-all w-60 h-10">
           <div className="bg-[#141414] h-full w-full absolute z-0 top-0" onClick={()=>setShowSearch(false)}></div>
           <div
            className="flex items-center w-full md:w-full justify-center absolute top-28"
          >
            <form
              className="flex items-center relative md:mx-auto w-max"
              onSubmit={(e)=>e.preventDefault()}
            >   
              <input
              ref={searchText}
                type="search"
                className={`cursor-pointer relative z-10 h-10 w-12 transition-all left-2 md:left-0 transform duration-500 ${showSearch ? "border-[1px] transform duration-500 w-[360px] md:w-96 md:pl-16 transition-all md:pr-4" : ""}  rounded-md bg-transparent pl-9 md:pl-12 text-white`}
                placeholder={lang[langKey]?.placeholder}
                onClick={()=>setShowSearch(true)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <button onClick={()=>{
                dispatch(addGptMovies({movieNames:null,movieResults:null}))
                setShowSearch(true);
                setButtonClicked(true);
                handleSearch();

              }} className="bg-red-600 border-1 p-2 w-20 md:w-32 mx-2 ml-3 md:ml-1 rounded-md font-semibold hover:bg-red-700">{lang[langKey].search}</button>
            </form>
          </div> 
          <GPTSuggestions buttonClicked={buttonClicked}/>
        </div>
    )
};

export default GPTSearch;