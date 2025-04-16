import { faArrowRight, faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import aboutimage from '../assets/images/aboutimage.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import discord from '../assets/images/discord.png';
import whatsapp from '../assets/images/whatsapp.png';
import telegram from '../assets/images/telegram.png';
import gmap from '../assets/images/gmap.png';
import address from '../assets/images/Address.png';
import tiktok from '../assets/images/Tiktok.png';
import facebook from '../assets/images/Facebook.png';
import instagram from '../assets/images/Instagram.png';
import email from '../assets/images/Email.png';
import phone from '../assets/images/Rotary Dial Telephone.png';

const socials = [
    { name: "Whatsapp", image: whatsapp, link: "https://www.whatsapp.com/?lang=id" },
    { name: "Telegram", image: telegram, link: "https://web.telegram.org/" },
    { name: "Discord", image: discord, link: "https://discord.com/" },
]

const contacts = [
    { name: "Jl. Babarsari No.43, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281", image: address, },
    { name: "(0274) 487711", image: phone, },
    { name: "reusemart@gmail.com ", image: email, },
    { name: "@reusemart", image: tiktok, },
    { name: "@reusemart", image: facebook, },
    { name: "@reusemart", image: instagram, },




]

const About = () => {
    return (
        <div className='flex flex-col h-full bg-white p-12 items-center'>
            <div className='flex items-center justify-center h-screen max-h-[600px] bg-[#ffffff] '>
                <div className="w-[500px] bg-[#ffffff]  ">
                    <p className='text-s text-green-700 font-bold'>WELCOME TO REUSEMART</p>
                    <p className="break-words whitespace-normal text-5xl font-bold mb-2">
                        ReuseMart: Reuse More, Waste Less, Do More</p>
                    <p className='text-sm text-gray-400'>ReuseMart is a platform for those who care about sustainability and circular living. Here, you can explore, share, and give new life to preloved items—helping reduce waste and support a more eco-friendly lifestyle. Be part of the movement to connect, contribute, and create positive impact together!</p>

                    <Button asChild className='mt-8 w-44 h-12 flex justify-center items-center rounded-[50px] bg-[#1F510F] hover:bg-white hover:text-black hover:outline-black'>
                        <Link to="/shop" > Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </Button>
                </div>
                <div className=" w-full h-full max-w-[500px] max-h-[400px]">
                    <img className='w-[600px] h-[400px] object-contain' src={aboutimage} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className="mt-12 text-4xl font-bold text-black">Join Us</p>
                <p className="mt-4 text-lg font-normal text-gray-500 mb-6">Be Part of the Change! Connect, share, and support sustainable fashion with ReLeaf Fashion.</p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            to={social.link}
                            className="w-44 h-44 bg-white p-4 shadow-md rounded-lg border flex flex-col hover:scale-105 transition-transform"
                        >
                            <img src={social.image} alt={social.name} className="h-[60%] w-full object-contain" />
                            <Button className='mt-4 mb-4 rounded-md bg-[#1F510F] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black'>Join</Button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mx-24'>
                <p className="mt-12 text-4xl font-bold text-black">Contact Us</p>
                <p className="mt-4 text-lg font-normal text-gray-500 mb-6">Be Part of the Change! Connect, share, and support sustainable fashion with ReLeaf Fashion.</p>
                <div className='flex gap-4 mt-4 justify-center items-center'>
                    <img src={gmap} alt="" />
                    <div className='flex flex-col items-start gap-8 justify-center'>
                        {contacts.map((contact, index) => (<div className='flex gap-4 items-center'>
                            <img src={contact.image} alt="" />
                            <p className='text-gray-500 font-normal break-words whitespace-normal'>{contact.name}</p>
                        </div>))}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;