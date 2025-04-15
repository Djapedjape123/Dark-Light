import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";


function ContactPage() {
    return (
        <div>
            <div className="p-8 max-w-3xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
                <h2 className="text-4xl font-bold text-center mb-8 text-green-600">📬 Contact</h2>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                        <FaEnvelope className="text-2xl text-green-500" />
                        <a href="mailto:petefipedjaradic@gmail.com" className="text-lg hover:underline">
                            petefipedjaradic@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                        <FaPhoneAlt className="text-2xl text-blue-500" />
                        <a href="tel:0612123525" className="text-lg hover:underline">
                            061 212 3525
                        </a>
                    </div>

                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                        <FaInstagram className="text-2xl text-pink-500" />
                        <a href="https://instagram.com/p.radic_" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
                            @p.radic_
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage