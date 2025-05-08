import React, { useRef } from "react";
import LoginImage from "../../assets/images/login_image.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/apiAuth";
import { toast } from "react-toastify";


const Login = () => {
	const navigate = useNavigate();
	const emailRef = useRef<any>(null);
	const passwordRef = useRef<any>(null);

	const HandleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const data = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		}
		console.log(data);
		LoginApi(data)
			.then((response) => {
				console.log(response);
				localStorage.setItem("token", response.token);
				localStorage.setItem("role", response.role);
				toast.success("Login successful!");
				if (response.role === "Pembeli") {
					navigate("/");
				} else if (response.role === "Organisasi") {
					navigate("/profile-organisasi");
				} else if (response.role === "CS") {

				} else if (response.role === "Admin") {
					navigate("/admin-organisasi");
				} else if (response.role === "Gudang") {

				} else if (response.role === "Owner") {

				}
			})
			.catch((error) => {
				toast.error(error.response.data.message);
				alert("Login failed. Please check your credentials.");
			});


	}
	return (
		<div className="flex flex-row w-full">
			<div className="flex flex-col w-1/2 h-screen bg-white  ">
				<img src={LoginImage} alt="Login" className="w-full h-full" />
			</div>
			<div className="flex flex-col w-1/2 h-screen bg-gray-100 justify-start  p-20 max-sm:w-full">
				<h1 className="text-6xl font-bold mb-4">Welcome to ReUseMart</h1>
				<h3 className="self-start mt-20">
					<strong className="text-3xl">Sign In To ReUseMart </strong>
				</h3>
				<form className="flex flex-col gap-4 w-full mt-10" onSubmit={HandleSubmit}>
					<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="relative">
								<input
									id="email"
									name="email"
									type="text"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Email address"
									ref={emailRef}
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Email
								</label>
							</div>
							<div className="relative">
								<input
									id="password"
									name="password"
									type="password"
									className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
									placeholder="Password"
									ref={passwordRef}
								/>
								<label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
									Password
								</label>
							</div>
							<div className="relative  flex justify-end">
								<Link to="/forgotPassword" className="text-l text-[#F5CB58]">
									<strong>Forgot Password?</strong>
								</Link>
							</div>
							<div className="relative items-center justify-center flex mt-10">
								<button className="bg-[#1F510F] text-white rounded-md px-2 py-1 w-3/4 h-12 cursor-pointer" type="submit">
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
				<div className="flex flex-row gap-14 items-center justify-center mt-5">

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
