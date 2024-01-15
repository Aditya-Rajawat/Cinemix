const Shimmer=()=>{
    const n=10;
    return (
        <div className="bg-[#141414] h-screen w-screen absolute top-0">
            <div className="absolute top-0 flex ml-9 bg-[#141414]">
                {
                    [...Array(n)].map((e,i)=><div key={i} className="bg-zinc-400 mt-[160px] rounded-[2px] w-[243px] h-[137px] mr-[5px] animate-pulse"></div>)
                }
        </div>
        </div>
    )
};

export default Shimmer;