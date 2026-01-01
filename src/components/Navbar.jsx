import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full bg-[#11172a] p-3 shadow-xl z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                <h1 className="text-white md:text-3xl text-xl font-semibold">
                    Ahmad Fathur Rahman
                </h1>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <ul className="hidden md:flex text-white text-xl flex-row space-x-6">
                    <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300">
                        <a href="#home">Home</a>
                    </li>
                    <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300">
                        <a href="#about">About</a>
                    </li>
                    <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 pb-4 transition-transform duration-300">
                    <ul className="flex flex-col space-y-4 text-white text-xl bg-[#11172a]">
                        <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300 text-center">
                            <a href="#home" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300 text-center">
                            <a href="#about" onClick={toggleMenu}>About</a>
                        </li>
                        <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300 text-center">
                            <a href="#skills" onClick={toggleMenu}>Skills</a>
                        </li>
                        <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300 text-center">
                            <a href="#projects" onClick={toggleMenu}>Projects</a>
                        </li>
                        <li className="rounded-lg p-2 hover:bg-white hover:text-[#11172a] hover:font-medium transition duration-300 text-center">
                            <a href="#contact" onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;