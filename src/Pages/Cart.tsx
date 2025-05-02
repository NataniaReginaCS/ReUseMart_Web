import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import barcode from '../assets/images/barcode.png';
import { Button } from '../components/ui/button';
import hpitem from '../assets/images/hpitem.png'
import item1 from '../assets/images/item1.png'
const items = [
    { name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones", image: hpitem, condition: "Like New", namaPenitip: "AgusGantengStore", price: "16.000.000", link: "/" },
    { name: "Samsung Galaxy S25 Ultra", image: item1, condition: "Brand New In Box", namaPenitip: "AgusGantengStore", price: "16.000.000", link: "/" },
    { name: "Home Furnishings", image: hpitem, condition: "Brand New Open Box", namaPenitip: "AgusGantengStore", price: "16.000.000", link: "/" },

];

const Cart = () => {
    const [delivery, setDelivery] = useState(true);
    return (
        <div className='flex flex-col h-full bg-white p-12'>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon className="text-gray-500 text-sm" icon={faHouse} />
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-gray-500">Shop</p>
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-green-500">Checkout</p>


            </div>
            <div className='flex mt-4 gap-16 p-12 justify-center'>
                <div className='flex flex-col w-3/5 max-w-[700px] h-full bg-white rounded-lg border-1 border-gray-300'>
                    <div className='flex items-center w-full h-[70px] bg-black rounded-t-lg p-4'>
                        <p className='font-bold text-2xl text-white'>DELIVERY</p>
                    </div>
                    <div className='flex justify-center mt-4 text-lg font-bold text-black'>
                        <button
                            onClick={() => setDelivery(true)}
                            className={`border border-gray-300 rounded-tl-lg bg-white w-full max-w-[250px] h-full flex items-center justify-center p-2 ${delivery ? 'border-b-2 border-b-black' : ''
                                }`}
                        >
                            <p>Delivery</p>
                        </button>
                        <button
                            onClick={() => setDelivery(false)}
                            className={`border border-gray-300 rounded-tr-lg bg-white w-full max-w-[250px] h-full flex items-center justify-center p-2 ${!delivery ? 'border-b-2 border-b-black' : ''
                                }`}
                        >
                            <p>Pickup</p>
                        </button>
                    </div>
                    <React.Fragment>
                        {
                            delivery ?
                                <form action="" className='flex flex-col items-between justify-center mx-10'>
                                    <div className='flex flex-col mt-4'>
                                        <div className='flex items-center justify-between gap-4'>
                                            <div className='flex-col items-start justify-start w-1/2'>
                                                <p className='text-lg font-bold text-black'>First Name</p>
                                                <input type="text" className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1' placeholder='Nathanael' />
                                            </div>
                                            <div className='flex-col items-start justify-start w-1/2'>
                                                <p className='text-lg font-bold text-black'>Last Name</p>
                                                <input type="text" className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1' placeholder='Hartono' />
                                            </div>
                                        </div>
                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Address</p>
                                            <input type="text" className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1' placeholder='Jl. Babarsari No.43, Janti, Caturtunggal' />
                                        </div>

                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Email</p>
                                            <input type="text" className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1' placeholder='nathanaelesmondhartono@gmail.com' />
                                        </div>
                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Phone Number</p>
                                            <input type="text" className='w-full max-w-[300px] h-10 rounded-md border-1 border-gray-300 p-2 mt-1' placeholder='081225342580' />
                                        </div>
                                    </div>
                                </form> :
                                <div className='flex flex-col items-between justify-center mx-10'>
                                    <div className='flex flex-col mt-4'>
                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Location</p>
                                            <div className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1'>
                                                <p className='text-black font-semibold'>Gudang Reusemart Jl. Kaliurang km 6,8 no.8</p>
                                            </div>
                                        </div>
                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Email</p>
                                            <div className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1'>
                                                <p className='text-black font-semibold'>reusemart@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className='flex-col items-start justify-start mt-4'>
                                            <p className='text-lg font-bold text-black'>Phone Number</p>
                                            <div className='w-full h-10 rounded-md border-1 border-gray-300 p-2 mt-1'>
                                                <p className='text-black font-semibold'>08125342670</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        }
                    </React.Fragment>

                    <hr className="self-center my-2 border-t  w-[95%] border-gray-300 mt-4" />
                    <div className='flex flex-col p-4 items-center justify-center'>
                        <p className='self-start text-2xl font-bold text-black'>Payment</p>
                        <img className='mt-8 w-[500px] h-[300px] object-contain' src={barcode} alt="" />
                    </div>
                </div>

                <div className='flex flex-col w-2/5 h-full bg-white bg-black rounded-lg border-1 border-gray-300'>
                    <div className='flex items-center w-full h-[70px] bg-black rounded-t-lg p-4'>
                        <p className='font-bold text-2xl text-white'>MY CART</p>
                    </div>
                    <div className='flex flex-col px-16 mt-8'>
                        <div className='flex items-center justify-between gap-4'>
                            <p className='font-semibold text-gray-400 text-xl'>Subtotal</p>
                            <p className='font-semibold text-gray-400 text-xl'>Rp 16.000.000</p>
                        </div>
                        <div className='flex items-center justify-between gap-4 mt-2'>
                            <p className='font-semibold text-gray-400 text-xl'>Handling Fees</p>
                            <p className='font-semibold text-gray-400 text-xl'>Rp 16.000.000</p>
                        </div>
                        {
                            delivery ? (
                                <div className='flex items-center justify-between gap-4 mt-2'>
                                    <p className='font-semibold text-gray-400 text-xl'>Delivery Fees</p>
                                    <p className='font-semibold text-gray-400 text-xl'>Rp 16.000.000</p>
                                </div>) : (
                                <div></div>
                            )
                        }
                        <div className='flex items-center justify-between gap-4 mt-2'>
                            <p className='font-bold text-black text-xl'>Total</p>
                            <p className='font-bold text-red-400 text-xl'>Rp 16.000.000</p>
                        </div>

                        <form action="" className='flex mt-4'>
                            <input type="number" className='w-full h-10 rounded-l-md rounded-r-none border-1 border-gray-300 p-2 ' placeholder='Enter point' />
                            <Button className='rounded-l-none rounded-r-md h-10'>
                                Use Points
                            </Button>
                        </form>

                    </div>
                    <hr className="self-center my-2 border-t  w-[95%] border-gray-300 mt-4" />
                    <div className='flex flex-col items-center justify-center'>

                        {items.map((item, index) => (
                            <div
                                key={index}

                                className="w-full h-full bg-white p-4 flex flex-col items-start  "
                            >
                                <div className='flex items-center gap-2 w-full'>

                                    <img src={item.image} alt={item.name} className="h-[60%] w-full max-w-[150px] max-h-[150px] object-contain" />
                                    <div className='flex flex-col self-start justify-start items-start'>
                                        <p className="font-semibold break-words whitespace-normal text-xl ">{item.name}</p>
                                        <p className=' font-normal text-gray-400 text-lg'>{item.namaPenitip}</p>
                                        <p className=' font-normal text-gray-400 text-lg'>Condition: {item.condition}</p>
                                        <p className='font-bold text-green-900 text-xl'>Rp {item.price}</p>
                                    </div>
                                </div>
                                <hr className="self-center my-2 border-t  w-[95%] border-gray-300 mt-4" />

                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center gap-4 mt-4 mb-8'>
                        <Button className='text-xl px-24 py-6'>
                            Upload Payment
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Cart;