import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from "../components/ui/calendar"
import homeimage from '../assets/images/Image.png';
import { Button } from "../components/ui/button"

const Home = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='flex flex-col h-screenbg-white'>
            <div className='flex items-center h-screen max-h-[600px] bg-[#EDF2EE] '>
                <div className="w-[700px] bg-gray-100 p-4 ml-64">
                    <p className='text-xs text-green-700'>WELCOME TO REUSEMART</p>
                    <p className="break-words whitespace-normal text-5xl font-bold">
                        Give Second Chances. Support Circular Change.</p>
                    <p className='text-2xl'>Discover <span className='text-orange-500'>Preloved Treasures</span> Today</p>
                    <p className='text-xs text-gray-400'>Smart Choices for a Smarter Planet</p>
                    <Button className='mt-4 w-32 bg-[#1F510F] hover:bg-white hover:text-black hover:outline-black' variant="destructive">Shop Now</Button>


                </div>
                <div>
                    <img className='w-[800px] h-[600px]' src={homeimage} alt="" />
                </div>
            </div>
            <div className='flex items-center h-screen max-h-[600px] bg-blue-500'></div>

        </div>
    );
};

export default Home;
