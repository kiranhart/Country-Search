import React from 'react';
import MoonOutlineIcon from '../assets/moon-outline.svg';
import MoonIcon from '../assets/moon.svg';

const Navbar = () => {
    return (
        <nav className="bg-white text-[#111517] drop-shadow-md flex items-center justify-between px-5 py-7 font-nunito">
            <h1 className="font-extrabold text-lg">Where in the world?</h1>
            <a href="" className="font-bold text-md flex items-center">
                <img src={MoonOutlineIcon} alt="moon" className="w-5 mr-3" />
                Dark Mode
            </a>
        </nav>
    );
};

export default Navbar;
