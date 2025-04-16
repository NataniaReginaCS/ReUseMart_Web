import { useState } from 'react'
import logo from '../assets/images/LOGO.png'
import { Button } from '../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
    faYoutube,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <header>
            <div className="bg-[#1F510F] text-white p-4 h-64 flex flex-col justify-between items-center">
                <div className='flex items-between justify-center gap-24'>
                    <div className='flex flex-col items-start justify-center w-64'>
                        <div className='flex items-center justify-center '>
                            <img src={logo} alt='logo' className='w-16 h-16' />
                            <h1 className='text-xl font-bold text-white'>ReuseMart</h1>
                        </div>
                        <p className=' ml-2 text-sm font-light break-words whitespace-normal '>ReuseMart supports a circular economy by reducing waste and giving secondhand goods a second life — embracing the 3R: Reduce, Reuse, Recycle.
                        </p>

                    </div>
                    <div className='flex flex-col item-start justify-start gap-2 mt-4'>
                        <p className='text-s font-semibold'>Marketplace</p>
                        <p className='text-xs font-light'>Overview</p>
                        <p className='text-xs  font-light'>Shop Preloved Fashion</p>
                        <p className='text-xs  font-light'>Upload Preloved Fashion</p>
                    </div>
                    <div className='flex flex-col item-start justify-start gap-2 mt-4'>
                        <p className='text-s font-semibold'>Marketplace</p>
                        <p className='text-xs font-light'>Overview</p>
                        <p className='text-xs  font-light'>Shop Preloved Fashion</p>
                        <p className='text-xs  font-light'>Upload Preloved Fashion</p>
                    </div>
                    <div className='flex flex-col item-start justify-start gap-2 mt-4'>
                        <p className='text-s font-semibold'>Marketplace</p>
                        <p className='text-xs font-light'>Overview</p>
                        <p className='text-xs  font-light'>Shop Preloved Fashion</p>
                        <p className='text-xs  font-light'>Upload Preloved Fashion</p>
                    </div>
                    <div className='flex flex-col item-start justify-start gap-2 mt-4'>
                        <p className='text-s font-semibold'>Community</p>
                        <p className='text-xs font-light'>About Us</p>
                        <p className='text-xs  font-light'>Forum Discussions</p>
                        <p className='text-xs  font-light'>Terms & Conditions</p>
                    </div>
                    <div className='flex flex-col item-start justify-start gap-2 mt-4 w-52'>
                        <p className='text-s font-semibold'>Join Our Newsletter</p>
                        <p className='text-xs font-light break-words whitespace-normal'>Be the first to know about our latest updates and more.</p>
                        <div className='flex items-start gap-2 mt-4'>
                            <input type="text" className='border-white outline-1 w-40 h-8 rounded-sm p-2 text-xs' placeholder='Enter your email' />
                            <Button className='bg-amber-300 w-16 h-8 rounded-sm text-black text-xs font-light hover:text-white'>Subscribe</Button>
                        </div>
                    </div>
                </div>
                <hr className="my-2 border-t  w-[95%] border-white" />
                <div className='flex justify-between items-center w-full  '>
                    <div className='gap-4 flex text-2xl ml-10'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <p className='text-xs font-light text-white mr-8'>© 2025 ReUseMart. All Rights Reserved.</p>
                </div>
            </div>
        </header>
    );
};

export default Footer