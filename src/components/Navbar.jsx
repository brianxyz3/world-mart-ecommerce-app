import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Login } from "@mui/icons-material";
import { Menu as MenuIcon, Close as CloseIcon, ShoppingBagOutlined } from "@mui/icons-material";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="bg-blue-800 md:bg-white py-4">
                <div className="flex justify-between mx-4 md:mx-10 mt-6 md:items-center">
                    {/* Logo */}
                    <div>
                        <div className="logo w-24 text-4xl"><p className="logo-text-w">W</p><p className="logo-text-m">M</p></div>
                    </div>


                    <div className={`md:flex ${isOpen ? "block" : "hidden"} justify-between w-3/4 `}>
                        <div className="md:w-2/3 w-full flex justify-center md:border md:bg-blue-800  text-blue-100 rounded-2xl py-1">
                            <div className="flex flex-col md:flex-row text-center md:justify-between gap-1 md:mt-0 mt-8 ">
                                <a href="#home" className="border-b-2  px-5 md:py-2 p-1 md:border-b-0 hover:bg-blue-900 hover:rounded-2xl">Home</a>
                                <a href="#about" className="border-b-2 px-5 md:py-2 p-1 md:border-b-0 hover:bg-blue-900 hover:rounded-2xl">About</a>
                                <a href="#fashion" className="border-b-2 px-5 md:py-2 p-1 md:border-b-0 hover:bg-blue-900 hover:rounded-2xl">Fashion</a>
                                <a href="#services" className="border-b-2 px-5 md:py-2 p-1 md:border-b-0 hover:bg-blue-900 hover:rounded-2xl">Offers</a>
                                <a className="border-b-2 px-5 md:py-2 p-1 md:border-b-0 hover:bg-blue-900 hover:rounded-2xl">Services <ExpandMoreIcon /></a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <IconButton size="large" aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton size="large" aria-label="shopping bag" color="inherit">
                                <ShoppingBagOutlined />
                            </IconButton>
                        </div>
                        <div className="flex items-center md:bg-blue-800 text-center text-blue-100 md:border md:rounded-3xl md:my-2 md:px-10 md:py-1 hover:font-bold hover:text-blue-300 hover:my-1 hover:px-11 hover:shadow=xl">
                            <p><Login /> Login</p>
                        </div>
                    </div>
                    {/* Menu Icon for Mobile */}
                    <div className="md:hidden hover:border-2 hover:rounded-md h-fit w-auto">
                        <button onClick={toggleNavbar}>
                            {isOpen ? (
                                <CloseIcon className="text-blue-200" />
                            ) : (
                                <MenuIcon className="text-blue-200" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

