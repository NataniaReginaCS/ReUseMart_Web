import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SyncLoader } from "react-spinners";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GetUnverifiedPayment } from "../../../api/ApiTransaksiPembelian";

import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Header from "../../../Components2/Header";
import SidebarNavCS from "../../../Components2/SideBarNavCS";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
type Pembelian = {
	id_pembelian: number;
	id_pembeli: number;
	total: number;
	ongkir: number;
	nomor_nota: string;
	tanggal_laku: Date;
	bukti_pembayaran: string;
	nama_pembeli: string;
};

const VerifikasiPembayaran = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<Pembelian[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage, setDataPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [selectedPenitip, setSelectedPenitip] = useState<Pembelian | null>(
		null
	);
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [showModalAdd, setShowModalAdd] = useState(false);

	const fetchPayment = async () => {
		const response = await GetUnverifiedPayment();
		setData(response.pembelian);
	};

	useEffect(() => {
		fetchPayment();
	}, []);

	const handleEditClick = (data: Pembelian) => {
		setSelectedPenitip(data);
		setShowModal(true);
	};

	const handleDeleteClick = (data: Pembelian) => {
		setSelectedPenitip(data);
		setShowModalDelete(true);
	};

	const filteredData = data.filter(
		(pembelian) =>
			pembelian.id_pembeli
				.toLocaleString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			pembelian.id_pembelian
				.toLocaleString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			pembelian.nomor_nota.toLowerCase().includes(searchTerm.toLowerCase()) ||
			pembelian.total.toString().includes(searchTerm.toLowerCase()) ||
			pembelian.nama_pembeli.toString().includes(searchTerm.toLowerCase())
	);

	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
	const totalPages = Math.ceil(filteredData.length / dataPerPage);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	const TABLE_HEAD = [
		"ID Pembelian",
		"Nama Pembeli",
		"Nomor Nota",
		"Tanggal Laku",
		"Ongkir",
		"Total",
		"Action",
	];

	return (
		<>
			<Header />
			<div className="flex max-lg:flex-wrap p-5 gap-5 lg:flex-nowrap lg:p-20 lg:gap-10 ">
				<SidebarNavCS></SidebarNavCS>

				{isLoading ? (
					<div className="justify-center items-center text-center">
						<SyncLoader color="#F5CB58" size={10} className="mx-auto" />
						<h6 className="mt-2 mb-0">Loading...</h6>
					</div>
				) : (
					<div className="bg-white w-full lg:w-full border border-gray-300 text-start gap-y-4 shadow-md mt-5">
						<div className="px-4 py-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
							<p>
								<strong>PAYMENT VERIFICATION</strong>
							</p>

							<div className="relative w-full sm:w-1/2">
								<FontAwesomeIcon
									icon={faSearch}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
								/>
								<input
									type="text"
									value={searchTerm}
									onChange={(e) => {
										setSearchTerm(e.target.value);
										setCurrentPage(1);
									}}
									className="w-full h-10 bg-[#F0F0F0] rounded-4xl pl-10 pr-4 py-2 focus:outline-none"
									placeholder="Search..."
								/>
							</div>
						</div>

						<div className="overflow-x-auto">
							<table className="w-full min-w-max table-auto text-left">
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
									{currentData.map((pembelian: any, index) => {
										const isLast = index === currentData.length;
										const classes = isLast
											? "p-4"
											: "p-4 border-b border-blue-gray-50";
										return (
											<tr key={pembelian.id_pembelian}>
												<td className={classes}>
													<p className="font-normal">
														{pembelian.id_pembelian}
													</p>
												</td>
												<td className={classes}>
													<p className="font-normal">
														{pembelian.nama_pembeli}
													</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{pembelian.nomor_nota}</p>
												</td>
												<td className={classes}>
													<p className="font-normal">
														{new Date(pembelian.tanggal_laku).toLocaleString(
															"id-ID",
															{
																weekday: "long",
																year: "numeric",
																month: "long",
																day: "numeric",
																hour: "2-digit",
																minute: "2-digit",
															}
														)}
													</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{pembelian.ongkir}</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{pembelian.total}</p>
												</td>
												<td className={classes}>
													<div className="flex flex-row justify-evenly ">
														<button
															className="font-medium  bg-cyan-500 rounded-3xl text-white w-30  cursor-pointer flex text-center items-center justify-center gap-1 p-1 "
															onClick={() => handleEditClick(pembelian)}
														>
															<FaEye  size={20} /> View
														</button>
														<button
															className="font-medium  bg-green-500 rounded-3xl text-white w-30  cursor-pointer flex text-center items-center justify-center gap-1 p-1 "
															onClick={() => handleEditClick(pembelian)}
														>
															<FaRegCheckCircle  size={20} /> Accept
														</button>

														<button
															className="font-medium bg-red-500 text-white rounded-3xl w-30 flex cursor-pointer text-center items-center justify-center gap-1 p-1"
															onClick={() => handleDeleteClick(pembelian)}
														>
															<ImCross size={20} /> Decline
														</button>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>

						{/* Pagination */}
						<div className="flex items-center justify-between px-4 py-4">
							{/* Rows per page */}
							<div className="flex items-center space-x-2">
								<span className="text-sm text-gray-700">Rows per page:</span>
								<select
									value={dataPerPage}
									onChange={(e) => {
										setCurrentPage(1);
										setDataPerPage(parseInt(e.target.value));
									}}
									className="text-sm border border-gray-300 rounded px-2 py-1"
								>
									{[5, 10, 20, 50].map((size) => (
										<option key={size} value={size}>
											{size}
										</option>
									))}
								</select>
							</div>

							{/* Info */}
							<div className="text-sm text-gray-700">
								{`${indexOfFirstData + 1}-${Math.min(
									indexOfLastData,
									data.length
								)} of ${data.length}`}
							</div>

							{/* Navigation arrows */}
							<div className="flex items-center space-x-2">
								<button
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
									className="text-gray-600 hover:text-black disabled:text-gray-300 cursor-pointer"
								>
									<MdChevronLeft size={40} />
								</button>
								<button
									onClick={() => handlePageChange(currentPage + 1)}
									disabled={currentPage === totalPages}
									className="text-gray-600 hover:text-black disabled:text-gray-300 cursor-pointer"
								>
									<MdChevronRight size={40} />
								</button>
							</div>
						</div>
					</div>
				)}
				{/* {showModal && selectedPenitip && (
                    <ModalEditPenitip
                        show={showModal}
                        dataPenitip={selectedPenitip}
                        idPenitip={selectedPenitip.id_penitip}
                        onClose={() => setShowModal(false)}
                        onSuccessEdit={fetchPenitip}
                    />
                )}

                {showModalDelete && selectedPenitip && (
                    <ModalDeletePenitip
                        show={showModalDelete}
                        idPenitip={selectedPenitip.id_penitip}
                        onClose={() => setShowModalDelete(false)}
                        onSuccessDelete={fetchPenitip}
                    />
                )} */}
			</div>
		</>
	);
};

export default VerifikasiPembayaran;
