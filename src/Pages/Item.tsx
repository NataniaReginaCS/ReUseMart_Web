import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import hpitem from '../assets/images/hpitem.png';
import item1 from '../assets/images/item1.png';
import { Textarea } from '../components/ui/textarea';
import { Label } from '@radix-ui/react-label';
const items = [
    { name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Samsung Galaxy S25 Ultra", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Home Furnishings", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Books & School", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Hobbies & Collectibles", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
];

const comments = [
    { name: "AgusGantengStore", image: hpitem, comment: "Nice product, exactly what I needed!", date: "2023-10-01" },
    { name: "KifKontol", image: hpitem, comment: "Delivery was quick and the packaging was good. Definitely recommend it.", date: "2023-10-01" },
    { name: "Lopek", image: hpitem, comment: "I was honestly a bit skeptical at first, but this turned out way better than expected. The quality is solid, the materials feel premium, and everything works perfectly out of the box. Kudos to the team!", date: "2023-10-01" },
]

const Item = () => {
    return (
        <div className='flex flex-col h-full bg-white p-12'>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon className="text-gray-500 text-sm" icon={faHouse} />
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-gray-500">Shop</p>
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-green-500">Detail Product</p>
            </div>
            <div className='flex mt-4 gap-12 '>
                <div className='w-1/2 h-[600px] bg-gray-500'>
                    <img src="https://via.placeholder.com/150" alt="Product" className='w-1/2 h-auto rounded-lg' />
                </div>
                <div className='flex flex-col w-1/2 h-[600px]'>
                    <p className='text-3xl font-semibold text-black'>TOZO T6 True Wireless Earbuds Bluetooth Headphones</p>
                    <div className='flex gap-4 mt-2'>
                        <p>inibintang</p>
                        <p className='text-gray-600'>4 Review</p>
                        <p className='font-bold'>Item Id <span className='text-gray-600'>R-24</span></p>
                    </div>
                    <p className='text-2xl font-bold text-green-600 mt-2'>Rp 16.000.000</p>
                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                    <p className='text-lg font-bold '>AgusGantengStore</p>
                    <p className='text-md font-semibold '>Description :</p>
                    <p className='text-sm font-normal text-gray-500 break-words whitespace-normal'>High-Performance Gaming Laptop – Unleash Your Power
                        Take your gaming to the next level with this high-performance gaming laptop, built for speed, power, and stunning visuals. Equipped with the latest Intel Core i7/i9 or AMD Ryzen 7/9 processor, NVIDIA GeForce RTX 40-series graphics, and a high-refresh-rate 15.6”/17.3” Full HD or QHD display, this laptop delivers ultra-smooth gameplay and breathtaking graphics.
                        Key Features: ✅ Blazing-Fast Performance – Multitask with ease using up to 32GB RAM and 1TB SSD storage. ✅ Immersive Graphics – Experience realistic visuals with Ray Tracing and high FPS gaming. ✅ Advanced Cooling System – Stay cool under pressure with an efficient thermal design. ✅ Customizable RGB Keyboard – Game in style with per-key RGB lighting. ✅ Long-Lasting Battery & Fast Charging – Play longer and charge quickly.</p>
                    <hr className="my-2 border-t  w-full border-gray-300" />
                    <div className='flex gap-4 mt-4 mb-4 justify-center'>
                        <Button className='w-[45%] h-10 rounded-md bg-[#000000] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black'>
                            Add to Cart
                        </Button>
                        <Button className='w-[45%] h-10 rounded-md bg-[#F0F0F0] hover:bg-[#000000] hover:text-white text-black border-1 border-black'>
                            Buy Now
                        </Button>
                    </div>
                    <hr className="my-2 border-t  w-full border-gray-300" />
                    <p className='text-sm font-bold'>Category: <span className='text-sm font-normal text-gray-500'>Gadget</span></p>
                    <p className='text-sm font-bold'>Warranty: <span className='text-sm font-normal text-gray-500'>No</span></p>
                </div>
            </div>
            <div className='flex flex-col w-full h-full items-center justify-start'>
                <p className="mt-32 text-3xl font-semibold text-black mb-6">Related Products</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="w-64 h-72 bg-white p-4 shadow-md rounded-lg border flex flex-col items-start  hover:scale-105 transition-transform"
                        >
                            <img src={item.image} alt={item.name} className="h-[60%] w-full object-contain" />
                            <p className='mt-2 font-light text-gray-400 text-xs'>{item.namaPenitip}</p>
                            <p className="mt-2 font-normal break-words whitespace-normal ">{item.name}</p>
                            <p className='font-bold text-green-900 text-md'>Rp {item.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-full h-full items-start rounded-lg mt-12 border-1 border-gray-300 p-4'>
                <p className="text-xl font-semibold text-black ">Add Discussion</p>
                <hr className="my-2 border-t  w-full border-gray-300" />
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea className='h-20' placeholder="Type your comment here." id="message" />
                </div>
                <Button className='mt-4 mb-4 rounded-md bg-[#000000] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black'>Add Comment</Button>
                <hr className="my-2 border-t  w-full border-gray-300" />

                <div className='flex flex-col gap-8 mt-4 ml-8 justify-center'>
                    {comments.map((comment, index) => (
                        <div className='flex gap-4 items-center' key={index}
                        >
                            <img className='rounded-[50px] w-12 h-12 bg-gray-500    ' src={item1} alt="" />
                            <div className='flex flex-col w-full h-full'>
                                <p className='font-bold text-black'>{comment.name}<span className='ml-4 text-xs text-gray-500 font-normal '>{comment.date}</span></p>
                                <p className='break-words whitespace-normal'>{comment.comment}</p>
                            </div>
                        </div>))}

                </div>
            </div>

        </div>
    );
}
export default Item