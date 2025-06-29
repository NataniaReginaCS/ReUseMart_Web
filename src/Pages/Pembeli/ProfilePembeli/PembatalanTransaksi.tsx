import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SyncLoader } from "react-spinners";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { MdDelete } from "react-icons/md";

import SideBarNav from "../../../Components2/SideBarNav";

import { getTransaksiDisiapkan } from "../../../api/ApiTransaksiPembelian";
import ModalBatalTransaksi from "./ModalBatalTransaksi";

type TransaksiPembelian = {
	id_pembelian: number;
	tanggal_lunas: Date;
	total: number;
    status_pengiriman: string;
	poin_didapat: number;
    poin_pembeli:number;
	
};

const PembatalanTransaksi = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<TransaksiPembelian[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataPerPage, setDataPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [selectedOrganisasi, setSelectedOrganisasi] = useState<TransaksiPembelian | null>(null);
	const [showModalDelete, setShowModalDelete] = useState(false);


    const fetchTransaksiDisiapkan = () => {
		setIsLoading(true);
		getTransaksiDisiapkan()
			.then((response) => {
				setData(response.pembelian);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	};


	useEffect(() => {
		fetchTransaksiDisiapkan();
	}, []);

	const handleEditClick = (data: TransaksiPembelian) => {
		setSelectedOrganisasi(data);
		setShowModal(true);
	};

	const handleDeleteClick = (data: TransaksiPembelian) => {
		setSelectedOrganisasi(data);
		setShowModalDelete(true);
	};

	const filteredData = data.filter(
		(org) =>
			org.id_pembelian.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
			org.poin_didapat.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
			org.status_pengiriman.toLowerCase().includes(searchTerm.toLowerCase()) ||
			org.tanggal_lunas.toString().toLowerCase().includes(searchTerm.toLowerCase())
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
		"Nomor Transaksi",
		"Tanggal Transaksi",
		"Total Transaksi",
		"Status Transaksi",
		"Action",
	];

	return (
		<>
		
			<div className="flex max-lg:flex-wrap p-5 gap-5 lg:flex-nowrap lg:p-20 lg:gap-10 ">

				<SideBarNav></SideBarNav>

				{isLoading ? (
					<div className="justify-center items-center text-center">
						<SyncLoader color="#F5CB58" size={10} className="mx-auto" />
						<h6 className="mt-2 mb-0">Loading...</h6>
					</div>
				) : (
					<div className="bg-white w-full lg:w-full border border-gray-300 text-start gap-y-4 shadow-md mt-5">
						<div className="px-4 py-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
							<p>
								<strong>Transaction</strong>
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
									{currentData.map((org: any, index) => {
										const isLast = index === currentData.length;
										const classes = isLast
											? "p-4"
											: "p-4 border-b border-blue-gray-50";
										return (
											<tr key={org.id_pembelian}>
												<td className={classes}>
													<p className="font-normal">{org.id_pembelian}</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{org.tanggal_lunas}</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{org.total}</p>
												</td>
												<td className={classes}>
													<p className="font-normal">{org.status_pengiriman}</p>
												</td>
												<td className={classes}>
													<div className="flex flex-row justify-evenly gap-2">													
														<button className="font-medium bg-red-500 text-white rounded-3xl w-30 flex cursor-pointer text-center items-center justify-center gap-1 p-1"
															onClick={() => handleDeleteClick(org)}
														>
															<MdDelete size={20} /> Cancel
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
			

				{showModalDelete && selectedOrganisasi && (
					<ModalBatalTransaksi
						show={showModalDelete}
						idPembelian={selectedOrganisasi.id_pembelian}
						onClose={() => setShowModalDelete(false)}
						onSuccessDelete={fetchTransaksiDisiapkan}
                        dataTransaksi={selectedOrganisasi}
					/>
				)}  
			</div>
		</>

	);
};

export default PembatalanTransaksi;