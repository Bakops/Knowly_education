import React from "react";

export default function ModalsInscriptionComponent(){
    return(
        <section className="relative py-10  sm:py-16 lg:py-24">
    <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-gray-800 rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Créer un compte</h2>
                    <p className="mt-2 text-base text-gray-500">Déjà inscrit ? <a href="#" title="" className="text-[#c3cc50] transition-all duration-200 hover:underline hover:text-blue-700">Se connecter</a></p>
                </div>

                <form action="#" method="POST" className="mt-8">
                    <div className="space-y-5">
                        <div>
                            <label className="text-base font-medium text-white">Nom et prénom </label>
                            <div className="mt-2.5">
                                <input type="text" name="" id="" placeholder="Saisissez votre nom complet" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                            </div>
                        </div>

                        <div>
                            <label className="text-base font-medium text-white"> Adresse e-mail </label>
                            <div className="mt-2.5">
                                <input type="email" name="" id="" placeholder="Saisissez votre adresse mail" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                            </div>
                        </div>

                        <div>
                            <label  className="text-base font-medium text-white"> Mot de passe </label>
                            <div className="mt-2.5">
                                <input type="password" name="" id="" placeholder="Entrez votre mot de passe" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#c3cc50] caret-[#c3cc50]" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#c3cc50] border border-transparent rounded-md focus:outline-none hover:bg-white hover:text-[#c3cc50] focus:bg-gray-800">S'inscrire</button>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="
                                    relative
                                    inline-flex
                                    items-center
                                    justify-center
                                    w-full
                                    px-4
                                    py-4
                                    text-base
                                    font-semibold
                                    text-gray-700
                                    transition-all
                                    duration-200
                                    bg-white
                                    border-2 border-gray-200
                                    rounded-md
                                    hover:bg-gray-100
                                    focus:bg-gray-100
                                    hover:text-black
                                    focus:text-black focus:outline-none
                                "
                            >
                                <div className="absolute inset-y-0 left-0 p-4">
                                    <svg className="w-6 h-6 text-[#c3cc50]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                        ></path>
                                    </svg>
                                </div>
                                S'inscrire avec Google
                            </button>
                        </div>
                    </div>
                </form>

                <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                    This site is protected by reCAPTCHA and the Google <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Privacy Policy</a> &
                    <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Terms of Service</a>
                </p>
            </div>
        </div>
    </div>
</section>

    )
}