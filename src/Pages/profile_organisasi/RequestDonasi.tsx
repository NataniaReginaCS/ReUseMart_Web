import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Frieren from "../../assets/images/Frieren.jpg";
import SidebarNavOrg from "../../Components2/SideBarNavOrg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel"
import {
    faSearch,
    faHouse,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

const data = [
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },
    { orderid: '1234567890', orderdate: '2023-10-01', orderstatus: 'Pending', ordertotal: '$100.00', orderlink: 'https://example.com/order/1234567890' },

]
const RequestDonasi = () => {
    const [showCurrentPassword, setCurrentPassword] = useState(false);
    const [showNewPassword, setNewPassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const total = data.length

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
    }
    const toggleCurrentPasswordVisibility = () => {
        setCurrentPassword((prev) => !prev);
    };
    const toggleNewPasswordVisibility = () => {
        setNewPassword((prev) => !prev);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPassword((prev) => !prev);
    };
    return (
        <div className="h-full px-10 py-5">
            <div className="mt-5 max-sm:mt-0">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a
                            href="/"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-green-300"
                        >
                            <FontAwesomeIcon
                                className="text-gray-500 text-sm"
                                icon={faHouse}
                            />
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <a
                                href="/marketplace"
                                className="ml-1 text-sm font-medium text-gray-500 md:ml-2"
                            >
                                Account
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="ml-1 text-sm font-medium text-[#00B207] md:ml-2">
                                Profile
                            </span>
                        </div>
                    </li>
                </ol>
            </div>
            <div className="flex flex-row gap-4">
                <SidebarNavOrg></SidebarNavOrg>
                <div className="flex flex-col w-full h-full mt-5">
                    <p className="text-2xl font-bold">Add Request Donation</p>
                    <div className="grid w-full gap-1.5 mt-2">
                        <Textarea className='h-30 border-green-500' placeholder="Type your comment here." id="message" />
                    </div>
                    <Button className="max-w-[200px] mt-4 bg-[#1F510F] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black rounded-md h-10">
                        <strong >Add Request</strong>
                    </Button>
                </div>

            </div>

        </div>
    );
};

export default RequestDonasi;