import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { MdDashboard } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Frieren from "../../assets/images/Frieren.jpg";

const profile = () => {
	const [showCurrentPassword, setCurrentPassword] = useState(false);
	const [showNewPassword, setNewPassword] = useState(false);
	const [showConfirmPassword, setConfirmPassword] = useState(false);
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
			<div className="flex flex-row">
				<div className="flex flex-col w-1/6 border-1 border-gray-300 rounded-lg bg-white py-5 pe-10 mt-5 ">
					<h3 className="px-4">
						<strong>Navigation</strong>
					</h3>
					<div className="flex items-center gap-2 mt-2 bg-[#E6E6E6] p-4 border-l-green-700  border-l-5">
						<MdDashboard />
						<p>Profile</p>
					</div>

					<div className="flex items-center gap-2 mt-2 text-gray-500 p-4">
						<FaArrowsRotate />
						<p>Order History</p>
					</div>
					<div className="flex items-center gap-2 mt-2 text-gray-500 p-4">
						<HiOutlineShoppingBag />
						<p>Shopping Cart</p>
					</div>
					<div className="flex items-center gap-2 mt-2  text-gray-500 p-4">
						<RiLogoutBoxRLine />
						<p>Log-out</p>
					</div>
				</div>

				<div className="flex flex-col flex-1 w-full p-4 mt-5 ms-10">
					<div>
						<h3>
							<strong>Hello, Rereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</strong>
						</h3>
						<p className="text-gray-500">
							From your account dashboard. you can easily check & view your{" "}
							<a href="#" className="text-[#2DA5F3]">
								Recent Orders
							</a>
							, manage your{" "}
							<a href="" className="text-[#2DA5F3]">
								Shipping and Billing Addresses
							</a>{" "}
							and edit your{" "}
							<a href="" className="text-[#2DA5F3]">
								Password
							</a>{" "}
							and{" "}
							<a href="" className="text-[#2DA5F3]">
								Account Details.
							</a>
						</p>
					</div>

					<div className="flex flex-row gap-4 mt-5">
						<div className="flex flex-row w-2/5 bg-white rounded-lg border-1 border-gray-300 justify-center items-center gap-10">
							<img
								src={Frieren}
								alt=""
								className="w-50 h-50 rounded-full max-sm:w-20 max-sm:h-20"
							/>
							<div className="text-center">
								<p className="text-2xl font-bold mt-2">Rereeeeeeeee</p>
								<p className="text-gray-500">Alamat email@gmail.com</p>
								<p className="text-gray-500">Buyer</p>
							</div>
						</div>

						<div className="flex flex-col w-1/4 bg-white rounded-lg p-5 border-1 border-gray-300 text-start gap-y-4">
							<p className="text-[#999999]">TOTAL POINT</p>
							<p>
								<strong>200 pts</strong>
							</p>
							<p className="text-[#999999]">TOTAL ORDER</p>
							<p>
								<strong>200 times</strong>
							</p>
							<p className="text-[#999999]">DATE JOIN</p>
							<p>
								<strong>20 November 2025</strong>
							</p>
						</div>
					</div>
					<div className="flex flex-row gap-x-10">
						<div className="flex flex-col w-2/5 bg-white  border-1 py-1  border-gray-300 text-start gap-y-4 mt-10">
							<div className="flex- flex-col">
								<p className="border-b-1 border-gray-300 p-2 px-4">
									<strong>CHANGE PASSWORD</strong>
								</p>
								<div className="flex flex-col gap-2 p-4">
									<label htmlFor="current-password">
										<strong>Current Password</strong>
									</label>
									<div className="relative">
										<input
											type={showCurrentPassword ? "text" : "password"}
											id="current-password"
											className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
										/>
										<span
											className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
											onClick={toggleCurrentPasswordVisibility}
										>
											{showCurrentPassword ? (
												<IoEyeOutline size={20} />
											) : (
												<IoEyeOffOutline size={20} />
											)}
										</span>
									</div>

									<label htmlFor="new-password">
										<strong>New Password</strong>
									</label>
									<div className="relative">
										<input
											type={showNewPassword ? "text" : "password"}
											id="new-password"
											className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
											placeholder="8+ characters"
										/>
										<span
											className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
											onClick={toggleNewPasswordVisibility}
										>
											{showNewPassword ? (
												<IoEyeOutline size={20} />
											) : (
												<IoEyeOffOutline size={20} />
											)}
										</span>
									</div>

									<label htmlFor="new-password">
										<strong>New Password</strong>
									</label>
									<div className="relative">
										<input
											type={showConfirmPassword ? "text" : "password"}
											id="new-password"
											className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
											placeholder="8+ characters"
										/>
										<span
											className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
											onClick={toggleConfirmPasswordVisibility}
										>
											{showConfirmPassword ? (
												<IoEyeOutline size={20} />
											) : (
												<IoEyeOffOutline size={20} />
											)}
										</span>
									</div>

									<button className="bg-[#1F510F] text-white p-3 mt-4 w-1/2">
										<strong>CHANGE PASSWORD</strong>
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-1/5  bg-white  border-1 py-1  border-gray-300 text-start gap-y-4 mt-10">
							<p className="border-b-1 border-gray-300 p-2 px-4">
								<strong>BILLING ADDRESS</strong>
							</p>

							<div className="gap-2 p-4">
								<p>
									<strong>Kevin Gilbert</strong>
								</p>
								<p className="text-[#5F6C72]">
									East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
									1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
								</p>
								<p>
									<strong>Phone Number : </strong>
									<span className="text-[#5F6C72]">+1-202-555-0118</span>
								</p>
								<p>
									<strong>Email : </strong>
									<span className="text-[#5F6C72]">
										kevin.gilbert@gmail.com
									</span>
								</p>
								<button className=" text-[#1F510F] border-4 border-[#1F510F] p-3 mt-4 w-3/4">
									<strong>EDIT ADDRESS</strong>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-end gap-10">
				<button className=" text-red-500 border-4 border-red-500 p-3 mt-4 ">
					<strong>NONACTIVE ACCOUNT</strong>
				</button>

				<a href="/edit_profile" className=" text-[#1F510F] border-4 border-[#1F510F] p-3 mt-4 ">
					<strong>EDIT PROFILE</strong>
				</a>
			</div>
		</div>
	);
};

export default profile;
