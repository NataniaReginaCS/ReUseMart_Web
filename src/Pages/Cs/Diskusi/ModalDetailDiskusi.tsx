import {
	Button,
	Modal,
	ModalBody,

	ModalHeader,
} from "flowbite-react";
import { useState, useEffect } from "react";

import { SyncLoader } from "react-spinners";

import { FetchBarangById } from "../../../api/ApiBarang";

import { FetchDiskusi } from "../../../api/ApiDiskusi";
import { toast } from "react-toastify";
import { AddDiskusi } from "../../../api/ApiDiskusi";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "@radix-ui/react-label";





const ModalDetailDiskusi = ({ idBarang, show, onClose }: any) => {
	
	const [data, setData] = useState<any>(null);
	
	const [diskusi, setDiskusi] = useState<any[]>([]);

	const [pesan, setPesan] = useState<string>("");

	const fetchBarangById = (id_barang: number) => {
		
		FetchBarangById(id_barang)
			.then((response) => {
				const barang = response.data;
				setData(barang);
				
			})
			.catch((err) => {
				console.log(err);
				
			});
	};
	const addDiskusi = (id_barang: number) => {
		if (!pesan) {
			toast.error("Please enter a message");
			return;
		}
	

		AddDiskusi(pesan, id_barang)
			.then((response) => {
				toast.success(response.message);
				fetchDiskusi(id_barang);
			})
			.catch((err) => {
				console.log(err);
				
			});
	};

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPesan(event.target.value);
	};

	const fetchDiskusi = (id_barang: number) => {
		
		FetchDiskusi(id_barang)
			.then((response) => {
				console.log(response);
				setDiskusi(response.diskusi);
				
			})
			.catch((err) => {
				console.log(err);
				
			});
	};

	useEffect(() => {
		fetchBarangById(idBarang);
		fetchDiskusi(idBarang);
	}, []);

	const handleClose = () => {
		onClose();
	};

	return (
		<Modal show={show} onClose={handleClose} dismissible size="7xl">
			<ModalHeader>History Detail</ModalHeader>
			<ModalBody className="max-h-[80vh] overflow-y-auto">
				{data === null ? (
					<div className="flex justify-center">
						<SyncLoader size={10} color="#F5CB58" />
					</div>
				) : (
					<>
						<div className="flex max-sm:flex-wrap gap-6 mb-6">
							<div className="w-1/2">
								<img
									src={data.foto}
									className="object-cover w-full h-full"
									alt=""
								/>
							</div>

							<div className="w-1/2">
								<p className="text-3xl font-semibold text-black">
									{data.nama_barang}
								</p>
								<div className="flex gap-4 mt-2">
									<p className="font-bold">
										Status:{" "}
										<span className="text-gray-600">{data.status_barang}</span>
									</p>
								</div>
								<p className="text-2xl font-bold text-green-600 mt-2">
									Rp {data.harga}
								</p>
								<hr className="my-2 border-t w-[95%] border-gray-300" />
								<p className="text-md font-semibold">Description:</p>
								<p className="text-sm font-normal text-gray-500 break-words whitespace-normal">
									{data.deskripsi}
								</p>
							</div>
						</div>

						{/* Add Discussion Form */}
						<div className="flex flex-col w-full rounded-lg border border-gray-300 p-4">
							<p className="text-xl font-semibold text-black">Add Discussion</p>
							<hr className="my-2 border-t w-full border-gray-300" />
							<div className="grid w-full gap-1.5">
								<Label htmlFor="message">Your message</Label>
								<Textarea
									className="h-20"
									placeholder="Type your comment here."
									id="message"
									onChange={handleChange}
								/>
							</div>
							<Button
								className="rounded-md mt-4 mb-4 bg-black hover:bg-gray-100 hover:text-black text-white border border-black"
								onClick={() => addDiskusi(idBarang)}
							>
								Add Comment
							</Button>
						</div>

						{/* Discussion List */}
						<div className="mt-6 max-h-[300px] overflow-y-auto pr-2">
							{diskusi.map((data, index) => (
								<div className="flex gap-4 items-start mb-4" key={index}>
									<img
										className="rounded-full w-12 h-12 bg-gray-500"
										src={data.foto}
										alt=""
									/>
									<div className="flex flex-col">
										<p className="font-bold text-black">
											{data.nama}
											<span className="ml-4 text-xs text-gray-500 font-normal">
												{data.role === "CS" && (
													<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">
														Customer Service
													</span>
												)}
												{new Date(data.tanggal).toLocaleString("id-ID", {
													weekday: "long",
													year: "numeric",
													month: "long",
													day: "numeric",
													hour: "2-digit",
													minute: "2-digit",
												})}
											</span>
										</p>
										<p className="break-words whitespace-normal">
											{data.pesan}
										</p>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</ModalBody>
		</Modal>
	);
};

export default ModalDetailDiskusi;
