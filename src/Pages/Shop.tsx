import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import hpitem from '../assets/images/hpitem.png'
import item1 from '../assets/images/item1.png'
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Button } from '../components/ui/button';

const items = [
    { name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Samsung Galaxy S25 Ultra", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Home Furnishings", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Books & School", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Hobbies & Collectibles", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Baby & Kids ", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Automotive", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Garden & Outdoor ", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Office & Industrial ", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Cosmetics & Skincare", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
];

const Shop = () => {
    const [warranty, setWarranty] = useState(true);

    return (
        <div className='flex flex-col h-full bg-white p-12'>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon className="text-gray-500 text-sm" icon={faHouse} />
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-green-500">Shop</p>
            </div>

            <div className='flex mt-4 gap-8'>
                <div className='flex flex-col w-1/5 h-full bg-white rounded-lg p-4 border-1 border-gray-300'>
                    <p className='self-center text-xl text-black font-bold mt-2 mb-4'>Filters</p>
                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                    <p className='self-start text-xl text-black font-bold'>Category</p>
                    <RadioGroup className='mt-4 mb-4 font-bold' defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Electronic & Gadget</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Clothing & Accessories</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-3" id="option-3" />
                            <Label htmlFor="option-3">Home Furnishings</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-4" id="option-4" />
                            <Label htmlFor="option-4">Books & School Supplies</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-5" id="option-5" />
                            <Label htmlFor="option-5">Hobbies & Collectibles</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-6" id="option-6" />
                            <Label htmlFor="option-6">Baby & Kids Equipment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-7" id="option-7" />
                            <Label htmlFor="option-7">Automotive</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-8" id="option-8" />
                            <Label htmlFor="option-8">Garden & Outdoor Supplies</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-9" id="option-9" />
                            <Label htmlFor="option-9">Office & Industrial Equipment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-10" id="option-10" />
                            <Label htmlFor="option-10">Cosmetics & Personal Care</Label>
                        </div>
                    </RadioGroup>
                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                    <p className='self-start text-xl text-black font-bold'>Warranty</p>
                    <div className='flex gap-4 mt-2'>

                        <Button onClick={() => setWarranty(true)}
                            className={`w-28 rounded-lg  ${warranty ? 'bg-[#1F510F] text-white ' : ' bg-[#F0F0F0] text-black hover:text-white'}`}>
                            Yes
                        </Button>
                        <Button onClick={() => setWarranty(false)}
                            className={`w-28 rounded-lg ${warranty ? 'bg-[#F0F0F0] text-black hover:text-white' : ' bg-[#1F510F] text-white '}`}>
                            No
                        </Button>
                    </div>
                    <p className='self-start text-xl text-black font-bold mt-2'>Harga</p>
                    <RadioGroup className='mt-4 mb-4 font-bold' defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-price-1" id="option-price-1" />
                            <Label htmlFor="option-price-1">Hingga Rp 50.000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-price-2" id="option-price-2" />
                            <Label htmlFor="option-price-2">Rp 50.000 - Rp 100.000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-price-3" id="option-price-3" />
                            <Label htmlFor="option-price-3">Rp 100.000 - Rp 500.000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-price-4" id="option-price-4" />
                            <Label htmlFor="option-price-4">Diatas Rp 500.000</Label>
                        </div>
                    </RadioGroup>
                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                    <Button className='mt-4 rounded-lg bg-[#1F510F] hover:bg-[#F0F0F0] hover:text-black text-white'>Apply</Button>
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="relative w-full">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                        />
                        <input
                            type="text"
                            className="w-full h-10 bg-[#F0F0F0] rounded-4xl pl-10 pr-4 py-2 focus:outline-none"
                            placeholder="Search Products..."
                        />
                    </div>
                    <div className='h-full mt-8'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6">
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
                </div>
            </div>
        </div >
    );
};
export default Shop;