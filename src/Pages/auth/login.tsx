import LoginImage from "../../assets/images/login_image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = async () => {
		try {
			const res = await axios.post('http://localhost:8080/api/login', {
				email,
				password
			});

			localStorage.setItem('user', JSON.stringify(res.data));
			alert('Logged in as ${res.data.role}');
			navigate('/shop');
		} catch (err) {
			alert('Login failed! Please check your email and password.');
		}
	};

	const navigate = useNavigate();
	return (
		<div className="flex flex-row w-full">
			<div className="flex flex-col w-1/2 h-screen bg-white  ">
				<img src={LoginImage} alt="Login" className="w-full h-full" />
			</div>
			<div className="flex flex-col w-1/2 h-screen bg-gray-100 justify-start px-20 py-4 max-sm:w-full">
				<h1 className="text-6xl font-bold mb-4">Welcome to ReUseMart</h1>
				<h3 className="self-start mt-4">
					<strong className="text-3xl">Sign In To ReUseMart </strong>
				</h3>
				<form className="flex flex-col gap-4 w-full">
					<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="flex-col gap-4">
								<label className=" text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="text"
									autoComplete="off"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email address"
									onChange={e => setEmail(e.target.value)}

								/>
							</div>
							<div className="flex-col gap-4">
								<label className=" text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="off"

									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 "
									placeholder="Password"

									onChange={e => setPassword(e.target.value)}

								/>
							</div>
							<div className="relative  flex justify-end">
								<a href="#" className="text-l text-[#F5CB58]">
									<strong>Forgot Password?</strong>
								</a>
							</div>
							<div className="relative items-center justify-center flex mt-10">
								<button onClick={handleLogin} className="bg-[#1F510F] text-white rounded-md px-2 py-1 w-3/4 h-12">
									<strong>Sign in</strong>
								</button>
							</div>
						</div>
					</div>
				</form>
				<div className="flex justify-center items-center">
					<div className="py-3 w-1/6 flex justify-center items-center text-xl before:border-6 after:border-6 text-[#838383] uppercase before:flex-1 before:border-t before:border-[#838383] before:me-4 after:flex-1 after:border-t after:border-[#838383] after:ms-4 dark:text-[#838383] dark:before:border-[#838383] dark:after:border-[#838383]">
						<strong>Or</strong>
					</div>
				</div>
				<div className="flex flex-row gap-14 items-center justify-center mt-2">

					<button className="border-[#F5CB58]  border-2 rounded-md px-2 py-1 w-1/3 h-15" onClick={() => navigate('/registerPembeli')}>
						<Link to='/registerPembeli'><strong className="text-[#F5CB58]">Register as Buyer</strong></Link>
					</button>
					<button className="border-[#F5CB58] border-2 rounded-md px-2 py-1 w-1/3 h-15 hover:pointer" onClick={() => navigate('/registerOrganisasi')}>
						<strong className="text-[#F5CB58] ">
							<Link to='/registerOrganisasi'>Register as Organization</Link>
						</strong>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
