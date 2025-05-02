import React from "react";
import LoginImage from "../../assets/images/login_image.png";
import { Link } from "react-router-dom";
import RegisterImage from "../../assets/images/registerImage.png";

const register_pembeli = () => {
	return (
		<div className="flex flex-row w-full">
			<div className="flex flex-col w-1/2 h-screen bg-white  ">
				<img src={RegisterImage} alt="Login" className="w-full h-full" />
			</div>
			<div className="flex flex-col w-1/2 h-screen bg-gray-100 justify-start  p-20 max-sm:w-full">
				<h1 className="text-6xl font-bold mb-4">ReUseMart</h1>
				<h3 className="self-start mt-20">
					<strong className="text-3xl">Create Account as Buyer</strong>
				</h3>
				<form className="flex flex-col gap-4 w-full mt-5">
					<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="relative w-1/2">
								<input
									id="fullname"
									name="fullname"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email Address"
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Full Name
								</label>
							</div>
							<div className="relative w-1/2">
								<input
									id="email"
									name="email"
									type="email"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email Address"
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Email Address
								</label>
							</div>

                            <div className="relative w-1/2">
								<input
									id="phonenumber"
									name="phonenumber"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Phone Number"
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Phone Number
								</label>
							</div>

                            <div className="relative w-1/2">
								<input
									id="password"
									name="password"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Phone Number"
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Password
								</label>
							</div>

                            <div className="relative w-1/2">
								<input
									id="confirmpassword"
									name="confirmpassword"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Confirm Password"
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Confirm Password
								</label>
							</div>
                            
							
							<div className="relative items-center justify-center flex mt-15">
								<button className="bg-[#1F510F] text-white rounded-md px-2 py-1 w-3/4 h-12">
									<strong>Create Account</strong>
								</button>
							</div>
                            <div className="relative  flex justify-center">
								<p  className="text-l ">
									<strong>Already have an account ?<Link to="/login" className="text-[#F5CB58]"> Login</Link> </strong>
								</p>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default register_pembeli;
