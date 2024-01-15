const LoadingSpinner=()=>{
    return (
        <div className="absolute md1:w-96 md1:h-40 z-100 flex items-center justify-center left-1/2 top-56 md1:left-[500px] md1:top-56">
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                >
            </div>
        </div>
    )
};

export default LoadingSpinner;