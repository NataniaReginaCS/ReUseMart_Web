import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Frieren from "../../assets/images/Frieren.jpg";
import {
	fetchOrderDetailsById,
	fetchOrderHistoryById,
} from "../../../api/ApiTransaksi"; // You need to make this API

import { fetchOrderHistory } from "../../../api/ApiTransaksi";
import SidebarNav from "../../../Components2/SideBarNav";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../../components/ui/carousel";
import {
	faSearch,
	faHouse,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPembeli, getAlamatUtama } from "../../../api/ApiPembeli";
import { before } from "node:test";

interface DetailKeranjang {
	id_barang: number;
	id_pembeli: number;
	jumlah: number;
	barang: {
		id_barang: number;
		nama: string;
		harga: number;
		foto: string;
	};
}

interface Barang {
	id_barang: number;
	nama: string;
	harga: number;
	foto: string;
}

interface Pembelian {
	id_pembelian: number;
	id_barang: number;
	id_pembeli: number;
	tanggal_lunas: string;
	total: number;
	status_pengiriman: string;
	poin_digunakan: number;
	ongkir: number;
}

interface Pembeli {
	id_pembeli: number;
	nama: string;
	email: string;
	telepon: string;
	foto: string;
	poin: number;
}

interface AlamatUtama {
	nama_alamat: string;
	nama_kota: string;
	nama_jalan: string;
	kode_pos: Int16Array;
}

const OrderDetails = () => {
	const [profile, setProfile] = useState<Pembeli>();
	const [alamatUtama, setAlamatUtama] = useState<AlamatUtama>();
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [orderData, setOrderData] = useState<any[]>([]);
	const [pembelian, setPembelian] = useState<Pembelian>();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const [details, setDetails] = useState<DetailKeranjang[]>([]);
	const [id2, setId2] = useState<number>(parseInt(id || "0"));
	const [barang, setBarang] = useState<DetailKeranjang[]>([]);

	const fetchHistory = () => {
		setIsLoading(true);
		fetchOrderHistoryById(id2)
			.then((data) => {
				console.log(data);
				setPembelian(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	};

	const fetchProfile = () => {
		fetchPembeli()
			.then((response) => {
				console.log(response);
				setProfile(response);
			})
			.catch((error) => {
				console.error("Error fetching profile:", error);
			});
	};

	const fetchAlamatUtama = () => {
		getAlamatUtama()
			.then((response) => {
				console.log(response);
				setAlamatUtama(response);
			})
			.catch((error) => {
				console.error("Error fetching address:", error);
			});
	};

	const fetchOrderDetails = () => {
		fetchOrderDetailsById(id2)
			.then((response) => {
				setBarang(response.items);
				console.log(response.items);
			})
			.catch((error) => {
				console.error("Error fetching order details:", error);
			});
	};

	useEffect(() => {
		fetchHistory();
		fetchProfile();
		fetchAlamatUtama();
		fetchOrderDetails();
	}, []);

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
				<SidebarNav></SidebarNav>
				<div className="flex flex-col w-full min-h-[500px] mt-5 border-1 border-gray-300 rounded-lg">
					<div className="flex items-center w-full justify-between ">
						<div className="flex items-center">
							<p className="text-2xl font-bold ml-8 mt-5">Order Details</p>
							<p className="text-md font-semibold text-[#4D4D4D]  ml-2 mt-5">
								•{" "}
								{pembelian?.tanggal_lunas
									? new Date(pembelian.tanggal_lunas).toLocaleDateString(
											"en-US",
											{
												year: "numeric",
												month: "long",
												day: "numeric",
											}
									  )
									: ""}{" "}
								• 3 Products
							</p>
						</div>

						<p
							className="text-lg font-semibold text-[#00B207]  mr-8 mt-5 hover:underline cursor-pointer  "
							onClick={() => navigate("/order")}
						>
							Back to List
						</p>
					</div>

					<div className="flex gap-4">
						<div className="flex flex-col w-full max-w-[400px] mt-5 p-4 m-4 border-1 border-gray-300 rounded-lg">
							<p className="text-md font-semibold text-[#999999]">
								BILLING ADDRESS
							</p>
							<hr className="-mx-4 my-2 border-t border-gray-300" />
							<p className="text-lg font-semibold">{profile?.nama}</p>
							<p className="text=[#999999]">
								{alamatUtama?.nama_alamat || "Alamat masih kosong"}
							</p>
							<p className="mt-20 font-semibold text-xs text-[#999999]">
								EMAIL
							</p>
							<p>{profile?.email}</p>
							<p className="mt-2 font-semibold text-xs text-[#999999]">PHONE</p>
							<p>{profile?.telepon}</p>
						</div>
						<div className="flex flex-col w-full max-w-[350px] mt-5 p-4 m-4 border border-gray-300 rounded-lg">
							<div className="flex items-center justify-between">
								<p className="text-md font-semibold text-[#999999]">
									ORDER ID:
								</p>
								<div className="flex items-center gap-2">
									<div className="w-px h-5 bg-gray-300" />
									<p className="text-md font-semibold">
										{pembelian?.id_pembelian}
									</p>
								</div>
							</div>

							<hr className="my-2 border-t border-gray-300" />

							<div className="flex justify-between">
								<p className="text-md font-semibold text-[#999999]">
									Subtotal:
								</p>
								<p className="text-md">Rp {pembelian?.total}</p>
							</div>

							<hr className="my-2 border-t border-gray-300" />

							<div className="flex justify-between">
								<p className="text-md font-semibold text-[#999999]">Point:</p>
								<p className="text-md">{pembelian?.poin_digunakan}</p>
							</div>

							<hr className="my-2 border-t border-gray-300" />

							<div className="flex justify-between">
								<p className="text-md font-semibold text-[#999999]">
									Shipping:
								</p>
								<p className="text-md">Rp {pembelian?.ongkir}</p>
							</div>

							<hr className="my-2 border-t border-gray-300" />

							<div className="flex justify-between">
								<p className="text-md font-semibold text-[#999999]">Total:</p>
								<p className="text-md text-green-500">
									Rp{" "}
									{(
										(pembelian?.total || 0) + (pembelian?.ongkir || 0)
									).toLocaleString("id-ID")}
								</p>
							</div>
						</div>
					</div>

					<table className="w-full mt-5 mb-5 border border-gray-200">
						<thead>
							<tr className="bg-[#F2F2F2] text-sm text-gray-600">
								<th className="px-4 py-3 text-center border">PRODUCT</th>
								<th className="px-4 py-3 text-center border">PRICE</th>
								<th className="px-4 py-3 text-center border">TOTAL</th>
							</tr>
						</thead>
						<tbody>
							{barang?.map((item) => (
								<tr
									key={item.id_barang}
									className="text-center border-b hover:bg-gray-50"
								>
									<td className="px-4 py-3 flex items-center gap-4 justify-center">
										<img
											src={`http://127.0.0.1:8000/${item.barang?.foto}`}
											alt={item.barang?.nama}
											className="w-16 h-16 object-cover rounded-md"
										/>
										<span className="text-left">{item.barang?.nama}</span>
									</td>
									<td className="px-4 py-3">Rp {item.barang?.harga}</td>
									<td className="px-4 py-3">Rp {item.barang?.harga}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrderDetails;
