import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/ui/button"


const Header = () => {
    return (
        <header>
            <div className="w-screen bg-[#1F510F] text-white flex justify-start items-center h-20 m-0">
                <div className="flex items-center p-4 mr-4">
                    INI LOGO
                </div>
                <div className='flex items-center font-semibold mr-50'>
                    <a className='hover:bg-white hover:text-black h-[80px] w-[150px] max-w-[100px] justify-center flex items-center' href="">
                        Home
                    </a>
                    <a className='hover:bg-white hover:text-black h-[80px] w-[150px] max-w-[100px] justify-center flex items-center' href="">
                        Shop
                    </a>
                    <a className='hover:bg-white hover:text-black h-[80px] w-[150px] max-w-[100px] justify-center flex items-center' href="">
                        Merch
                    </a>
                    <a className='hover:bg-white hover:text-black h-[80px] w-[150px] max-w-[100px] justify-center flex items-center' href="">
                        About
                    </a>

                </div>
                <div className='m-2 w-full flex max-w-[600px] h-full max-h-[35px] '>
                    <div className='w-[60%] bg-white flex items-center text-black'>

                        <input type="text" className='w-full h-full rounded-l-sm px-4 focus:outline-none
' placeholder='Search... ' />


                    </div>
                    <div className=' bg-[#F5CB58] font-semibold items-center flex rounded-r-sm px-4'>
                        Search
                    </div>
                </div>

                <div className='flex items-center gap-6 p-4 font-semibold mr-6'>
                    <div className='rounded-[50px] bg-gray-500 p-[10px] w-full'>
                        tes
                    </div>
                    <div className='rounded-[50px] bg-gray-500 p-[10px] w-full'>
                        tes
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header