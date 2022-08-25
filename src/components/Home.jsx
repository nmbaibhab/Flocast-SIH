import React from "react";

const Home = () => {
    return (
        <>


            <div id="animation-carousel" className="relative" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    
                    <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    <div className="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </>
    );
};
export default Home;
