import React from "react";

export default function CardCoursComponent(){
    return(
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Ces cours pourraient vous intéresser :</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Découvrez une sélection de cours en ligne conçus pour booster vos compétences et vous accompagner dans votre apprentissage.</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="group overflow-hidden bg-gray-800 rounded-lg shadow transform transition-all duration-400 ease-in-out hover:-translate-y-4 hover:scale-103 relative">
                <div className="h-32 w-32 bg-[#c3cc50] absolute -top-[75px] -right-[75px] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center group-hover:scale-[30]"></div>
                <div className="p-5 relative">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3 ">
                            <img className="object-cover w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                        </a>
                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-[#c3cc50] rounded-full"> MARKETING </span>
                        </div>
                    </div>
                    <div className="m-[5px]">
                        <span className="ml-1 flex flex-row align-middle gap-3 mt-6 text-base font-semibold tracking-widest text-gray-500 uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg> 2h28 </span>
                    <p className="mt-3 text-2xl font-semibold">
                        <a href="#" title="" className="text-white"> Maîtrisez les Bases de Python en 30 Jours </a>
                    </p>
                    <p className="mt-1 text-base text-[15px] text-white">Apprenez à coder en Python, l'un des langages les plus polyvalents et populaires au monde. Ce cours vous guidera pas à pas</p>
                    <a href="#" title="" className="inline-flex items-center justify-center py-1.5 px-4 mt-5 text-sm font-semibold text-[#c3cc50] bg-white rounded-full transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Commencer
                    </a>
                    </div>
                </div>
            </div>

            <div className="group overflow-hidden bg-gray-800 rounded-lg shadow transform transition-all duration-400 ease-in-out hover:-translate-y-4 hover:scale-103 relative">
                <div className="h-32 w-32 bg-[#c3cc50] absolute -top-[75px] -right-[75px] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center group-hover:scale-[30]"></div>
                <div className="p-5 relative">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3 ">
                            <img className="object-cover w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                        </a>
                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-[#c3cc50] rounded-full"> MARKETING </span>
                        </div>
                    </div>
                    <div className="m-[5px]">
                        <span className="ml-1 flex flex-row align-middle gap-3 mt-6 text-base font-semibold tracking-widest text-gray-500 uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg> 2h28 </span>
                    <p className="mt-3 text-2xl font-semibold">
                        <a href="#" title="" className="text-white"> Maîtrisez les Bases de Python en 30 Jours </a>
                    </p>
                    <p className="mt-1 text-base text-[15px] text-white">Apprenez à coder en Python, l'un des langages les plus polyvalents et populaires au monde. Ce cours vous guidera pas à pas</p>
                    <a href="#" title="" className="inline-flex items-center justify-center py-1.5 px-4 mt-5 text-sm font-semibold text-[#c3cc50] bg-white rounded-full transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Commencer
                    </a>
                    </div>
                </div>
            </div>

            <div className="group overflow-hidden bg-gray-800 rounded-lg shadow transform transition-all duration-400 ease-in-out hover:-translate-y-4 hover:scale-103 relative">
                <div className="h-32 w-32 bg-[#c3cc50] absolute -top-[75px] -right-[75px] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center group-hover:scale-[30]"></div>
                <div className="p-5 relative">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3 ">
                            <img className="object-cover w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                        </a>
                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-[#c3cc50] rounded-full"> MARKETING </span>
                        </div>
                    </div>
                    <div className="m-[5px]">
                        <span className="ml-1 flex flex-row align-middle gap-3 mt-6 text-base font-semibold tracking-widest text-gray-500 uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg> 2h28 </span>
                    <p className="mt-3 text-2xl font-semibold">
                        <a href="#" title="" className="text-white"> Maîtrisez les Bases de Python en 30 Jours </a>
                    </p>
                    <p className="mt-1 text-base text-[15px] text-white">Apprenez à coder en Python, l'un des langages les plus polyvalents et populaires au monde. Ce cours vous guidera pas à pas</p>
                    <a href="#" title="" className="inline-flex items-center justify-center py-1.5 px-4 mt-5 text-sm font-semibold text-[#c3cc50] bg-white rounded-full transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Commencer
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

    );
}
