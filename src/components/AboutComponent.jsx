import React from 'react'
import { FaCode, FaRocket, FaUserAstronaut } from "react-icons/fa";
function AboutComponent() {
    return (
        <div>
            <div className="p-8 max-w-4xl mx-auto min-h-screen">
                <h2 className="text-4xl font-bold text-center mb-8 text-green-600">👋 O meni</h2>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                    
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">
                            Zovem se <span className="font-semibold text-green-500">Pedja</span> i volim da pravim web aplikacije koje
                            izgledaju lepo i rade brzo. Uživam u učenju novih tehnologija i pravljenju stvari koje imaju smisla.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">
                            Fokusiran sam na frontend (React, Tailwind), ali se ne bojim ni backend-a kad zatreba.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">
                            Cilj mi je da spojim dizajn, logiku i korisničko iskustvo u jedno.
                        </p>
                    </div>

                    
                    <div className="flex flex-col items-center space-y-6">
                        <FaUserAstronaut className="text-6xl text-green-500 hover:scale-110 transition-transform duration-300" />
                        <FaCode className="text-6xl text-blue-500 hover:rotate-12 transition-transform duration-300" />
                        <FaRocket className="text-6xl text-red-500 hover:translate-y-[-5px] transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent