import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Frieren from "../../assets/images/Frieren.jpg";
import { FetchBarangByPenitip } from "../../api/ApiPenitip";
import SidebarNavPenitip from "../../Components2/SideBarNavPenitip";
import ModalDetailTransaksi from "./ModalDetailTransaksi";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../components/ui/carousel";
import {
	faSearch,
	faHouse,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FetchTransaksiByGudang } from "../../api/ApiGudang";
import SideBarNavGudang from "../../Components2/SideBarNavGudang";
import { Button } from "../../components/ui/button";
import ModalAssignDate from "./ModalAssignDate";
import Header from "../../Components2/Header";
type Barang = {
	id_barang: number;
	id_penitipan: number;
	id_kategori: string;
	id_hunter: string;
	nama_barang: string;
	deskripsi: string;
	foto: string;
	berat: number;
	isGaransi: boolean;
	akhir_garansi: string;
	status_perpanjangan: string;
	harga: number;
	tanggal_akhir: string;
	batas_ambil: string;
	status_barang: string;
	tanggal_ambil: string;
	id_pembelian: number;
	status_pengiriman: string;
	metode_pengiriman: string;
};
const ManageTransaksi = () => {
	const [showCurrentPassword, setCurrentPassword] = useState(false);
	const [showNewPassword, setNewPassword] = useState(false);
	const [showConfirmPassword, setConfirmPassword] = useState(false);
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [data, setData] = useState<Barang[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(0);
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [showModalAssign, setShowModalAssign] = useState(false);

	const [showModal, setShowModal] = useState(false);
	const [tempIdBarang, setTempIdBarang] = useState(0);

	const handleClick = (id_pembelian: number) => {
		setShowModal(true);
		setTempIdBarang(id_pembelian);
	};

	const handleAssignClick = (id_pembelian: number) => {
		setShowModalAssign(true);
		setTempIdBarang(id_pembelian);
	};

	const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
		const result: T[][] = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize));
		}
		return result;
	};
	const filteredData = data.filter((item) => {
		const searchLower = searchTerm.toLowerCase();

		const matchesSearch =
			item.id_pembelian.toString().includes(searchLower) ||
			item.status_pengiriman.toLowerCase().includes(searchLower) ||
			item.metode_pengiriman.toLowerCase().includes(searchLower);
		const itemDate = new Date(item.tanggal_akhir);

		return matchesSearch;
	});

	const chunkedData = chunkArray(filteredData, itemsPerPage);

	const pageCount = Math.ceil(filteredData.length / itemsPerPage);
	const paginatedData = filteredData.slice(
		currentPage * itemsPerPage,
		currentPage * itemsPerPage + itemsPerPage
	);

	const fetchBarangByPenitip = () => {
		setIsLoading(true);
		FetchTransaksiByGudang()
			.then((response) => {
				setData(response.data);
				setIsLoading(false);
				console.log(response);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setIsLoading(false);
			});
	};
	useEffect(() => {
		fetchBarangByPenitip();
	}, []);
	44;

	return (
		<>
			<Header />
			<div className="h-full px-10 py-5">
				<div className="flex flex-row gap-4">
					<SideBarNavGudang />
					<div className="flex flex-col max-w-[1200px] w-full min-h-[500px] mt-5 border-1 border-gray-300 rounded-lg">
						<p className="text-2xl font-bold ml-8 mt-5">Manage Transaksi</p>

						<div className="flex gap-4 items-center mb-4 px-6 mt-5">
							<input
								type="text"
								placeholder="Search..."
								className="border border-gray-300 rounded-md px-3 py-2"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
							/>
							<p className="text-sm text-gray-500 font-semibold">Start Date:</p>
							<input
								type="date"
								value={startDate}
								onChange={(e) => setStartDate(e.target.value)}
								className="border border-gray-300 rounded-md px-3 py-2"
							/>
							<p className="text-sm text-gray-500 font-semibold">End Date:</p>
							<input
								type="date"
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
								className="border border-gray-300 rounded-md px-3 py-2"
							/>
							<select
								value={itemsPerPage}
								onChange={(e) => setItemsPerPage(Number(e.target.value))}
								className="border border-gray-300 rounded-md px-3 py-2"
							>
								<option value={5}>5 / page</option>
								<option value={10}>10 / page</option>
							</select>
						</div>
						<Carousel>
							<CarouselContent>
								{chunkedData.map((chunk, index) => (
									<CarouselItem key={index}>
										<div className="w-full overflow-x-auto">
											<table className="w-full mt-5 mb-5 table-auto">
												<thead>
													<tr className="bg-[#F2F2F2]">
														<th className="px-4 py-3 text-center">
															ID PEMBELIAN
														</th>
														<th className="px-4 py-3 text-center">
															STATUS PENGIRIMAN
														</th>
														<th className="px-4 py-3 text-center">
															METODE PENGIRIMAN
														</th>
														<th className="px-4 py-3 text-center">DETAILS</th>
														<th className="px-4 py-3 text-center">ACTIONS</th>
													</tr>
												</thead>
												<tbody>
													{chunk.map((item, rowIndex) => (
														<tr key={rowIndex} className="border-b">
															<td className="py-3 text-center break-words">
																{item.id_pembelian}
															</td>
															<td className="px-4 py-3 text-center">
																{item.status_pengiriman}
															</td>
															<td className="px-4 py-3 text-center">
																{item.metode_pengiriman}
															</td>
															<td
																className="px-4 py-3 text-center text-[#00B207] hover:underline cursor-pointer"
																onClick={() => handleClick(item.id_pembelian)}
															>
																View Details
															</td>
															<td className="px-4 py-3 flex  justify-center">
																{item && (
																	<div className="flex gap-4">
																		<div className="flex gap-4">
																			<Button
																				color="red"
																				className="cursor-pointer"
																				onClick={() => {
																					handleAssignClick(item.id_pembelian);
																				}}
																			>
																				Assign Date
																			</Button>
																		</div>
																	</div>
																)}
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>

							<div className="flex justify-center gap-4 mt-4">
								<CarouselPrevious className="static relative" />
								<CarouselNext className="static relative" />
							</div>
						</Carousel>
					</div>
				</div>
				{showModal && (
					<ModalDetailTransaksi
						show={showModal}
						idPembelian={tempIdBarang}
						onClose={() => {
							setShowModal(false);
							fetchBarangByPenitip();
						}}
					/>
				)}{" "}
				{showModalAssign && (
					<ModalAssignDate
						show={showModalAssign}
						idPembelian={tempIdBarang}
						onClose={() => {
							setShowModalAssign(false);
							fetchBarangByPenitip();
						}}
					/>
				)}
			</div>
		</>
	);
};

export default ManageTransaksi;
