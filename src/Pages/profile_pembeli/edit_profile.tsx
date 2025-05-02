import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frieren from "../../assets/images/Frieren.jpg";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Street", "Country", "City", "Zipcode", "Action"];

const TABLE_ROWS = [
	{
		name: "Kalvin Lawinata",
		Street: "Jalan Prof Hm Yamin Sh III No. 42, Perintis",
		country: "Indonesia",
		city: "Kota Medan",
		zipcode: "20231",
	},
	{
		name: "Kalvin Lawinata",
		Street: "Jalan Prof Hm Yamin Sh III No. 42, Perintis",
		country: "Indonesia",
		city: "Kota Medan",
		zipcode: "20231",
	},
	{
		name: "Kalvin Lawinata",
		Street: "Jalan Prof Hm Yamin Sh III No. 42, Perintis",
		country: "Indonesia",
		city: "Kota Medan",
		zipcode: "20231",
	},
	{
		name: "Kalvin Lawinata",
		Street: "Jalan Prof Hm Yamin Sh III No. 42, Perintis",
		country: "Indonesia",
		city: "Kota Medan",
		zipcode: "20231",
	},
	{
		name: "Kalvin Lawinata",
		Street: "Jalan Prof Hm Yamin Sh III No. 42, Perintis",
		country: "Indonesia",
		city: "Kota Medan",
		zipcode: "20231",
	},
];

const edit_profile = () => {
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
			<div className="w-full bg-white  border-1 py-1  border-gray-300 text-start gap-y-4 mt-10">
				<div className="">
					<div className="border-b-1 border-gray-300 w-full">
						<p className=" p-2 px-4">
							<strong>ACCOUNT SETTINGS</strong>
						</p>
					</div>
					<div className="flex flex-row flex-initial justify-between">
						<div className="flex flex-col flex-1/3 gap-2 p-4">
							<label htmlFor="first-name">
								<strong>First Name</strong>
							</label>
							<input
								type="text"
								id="first-name"
								className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
							/>

							<label htmlFor="last-name">
								<strong>Last Name</strong>
							</label>
							<div className="relative">
								<input
									type="text"
									id="last-name"
									className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
									placeholder=""
								/>
							</div>

							<label htmlFor="email">
								<strong>Email</strong>
							</label>
							<div className="relative">
								<input
									type="text"
									id="email"
									className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
									placeholder=""
								/>
							</div>

							<button className="bg-[#1F510F] text-white p-3 mt-4 w-1/6 rounded-3xl">
								<strong>Save Changes</strong>
							</button>
						</div>
						<div className="flex flex-col items-center justify-center  align-middle p-15">
							<img src={Frieren} alt="" className="h-50 w-50 rounded-full" />
							<div className="text-center mt-4">
								<label
									htmlFor="upload-image"
									className="cursor-pointer text-[#00B207] border-4 border-[#00B207] p-3 inline-block rounded-lg"
								>
									<strong>Choose Image</strong>
								</label>
								<input
									id="upload-image"
									type="file"
									className="hidden"
									onChange={(e) => {}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-white  border-1 py-1  border-gray-300 text-start gap-y-4 mt-10">
				<div className="">
					<div className="border-b-1 border-gray-300 w-full">
						<p className=" p-2 px-4">
							<strong>ADD ADDRESS</strong>
						</p>
					</div>
					<div className="flex flex-row flex-initial justify-between">
						<div className="flex flex-col flex-1/3 gap-2 p-4">
							<label htmlFor="street-address">
								<strong>Street Address</strong>
							</label>
							<input
								type="text"
								id="street-address"
								className="border-1 border-gray-300 rounded-lg p-2 w-1/2 pr-10"
							/>
							<div className="flex flex-row gap-2 justify-between max-w-3/4">
								<div>
									<label htmlFor="country-region">
										<strong>Country / Region</strong>
									</label>

									<input
										type="text"
										id="country-region"
										className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
										placeholder=""
									/>
								</div>

								<div>
									<label htmlFor="states">
										<strong>States</strong>
									</label>

									<input
										type="states"
										id="email"
										className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
										placeholder=""
									/>
								</div>

								<div>
									<label htmlFor="zipcode">
										<strong>Zipcode</strong>
									</label>

									<input
										type="text"
										id="zipcode"
										className="border-1 border-gray-300 rounded-lg p-2 w-full pr-10"
										placeholder=""
									/>
								</div>
							</div>

							<button className="bg-[#1F510F] text-white p-3 mt-4 w-1/6 rounded-3xl">
								<strong>Add Address</strong>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full bg-white  border-1 py-1  border-gray-300 text-start gap-y-4 mt-10 shadow-md">
				<div className="px-4 py-10">
					<p>
						<strong>ADD ADDRESS</strong>
					</p>
				</div>
				<table className="w-full min-w-max table-auto text-left ">
					<thead className="bg-[#2A3042] text-white text-center">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
								>
									<p className="font-normal leading-none opacity-70">
										<strong>{head}</strong>
									</p>
								</th>
							))}
						</tr>
					</thead>
					<tbody className="text-center">
						{TABLE_ROWS.map(
							({ name, Street, country, city, zipcode }, index) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? "p-4 "
									: "p-4 border-b border-blue-gray-50 ";

								return (
									<tr key={name}>
										<td className={classes}>
											<p color="blue-gray" className="font-normal">
												{name}
											</p>
										</td>
										<td className={classes}>
											<p color="blue-gray" className="font-normal">
												{Street}
											</p>
										</td>
										<td className={classes}>
											<p color="blue-gray" className="font-normal">
												{country}
											</p>
										</td>
										<td className={classes}>
											<p color="blue-gray" className="font-normal">
												{city}
											</p>
										</td>
										<td className={classes}>
											<p color="blue-gray" className="font-normal">
												{zipcode}
											</p>
										</td>
										<td className={classes}>
											<button
												color="blue-gray"
												className="font-medium bg-yellow-400 text-white rounded-2xl w-20 me-4"
											>
												Edit
											</button>
											<button color="blue-gray" className="font-medium text-white bg-[#1F510F] rounded-2xl w-20">
												Set
											</button>
										</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default edit_profile;
