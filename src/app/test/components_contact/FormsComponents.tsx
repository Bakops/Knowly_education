import React from "react";

export default function FormsComponents(){
    return(
        <section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                    <h3 className="text-3xl font-semibold text-center text-gray-800">Envoyer nous un message</h3>

                    <form action="#" method="POST" className="mt-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label className="text-base font-medium text-gray-800"> Votre nom </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Entrer votre nom" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-800"> Email </label>
                                <div className="mt-2.5 relative">
                                    <input type="email" name="" id="" placeholder="Entrer votre email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-800"> Numéros </label>
                                <div className="mt-2.5 relative">
                                    <input type="tel" name="" id="" placeholder="Entrer votre numéros" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-800"> Statut </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Entrer votre statut (Etudiant, proffesionels,..)" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label className="text-base font-medium text-gray-800"> Message </label>
                                <div className="mt-2.5 relative">
                                    <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]"></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#c3cc50] border border-transparent rounded-md focus:outline-none hover:bg-gray-800 focus:bg-gray-800">
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>


    );
}