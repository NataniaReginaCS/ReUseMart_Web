import { useState } from "react";

import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import {
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	TextInput,
} from "flowbite-react";

import { UpdateOrganisasi } from "../../../api/ApiAdmin";

interface ModalEditOrganisasiProps {
	dataOrganisasi: {
		id_organisasi: number;
		nama: string;
		alamat: string;
		email: string;
		telp: string;
		password: string;
		foto: File; // bisa juga File kalau mau langsung upload
	};
	onClose: () => void;
	idOrganisasi: number;
	show: boolean;
    onSuccessEdit: () => void;
}

const ModalEditOrganisasi = ({
	dataOrganisasi,
	onClose,
	idOrganisasi,
	show,
    onSuccessEdit,
}: ModalEditOrganisasiProps) => {
	const [data, setData] = useState(dataOrganisasi);
	const [isPending, setIsPending] = useState(false);
	const handleClose = () => {
		onClose();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	};
	const submitData = (event: any, idOrganisasi: number) => {
		event.preventDefault();
		setIsPending(true);
		UpdateOrganisasi(data, idOrganisasi)
			.then((response) => {
				setIsPending(false);
				toast.success(response.message);
				onSuccessEdit();

				handleClose();
			})
			.catch((err) => {
				console.log(err);
				setIsPending(false);
				toast.dark(err.message);
			});
	};
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setData({ ...data, foto: file });
		}
	};
	return (
		<>
			<Modal show={show} dismissible size="md" popup onClose={handleClose}>
				<ModalHeader />
				<ModalBody>
					<form action="submit" onSubmit={(e) => submitData(e, idOrganisasi)}>
						<div className="space-y-6">
							<h3 className="text-xl font-medium text-gray-900 dark:text-white">
								Edit Organization
							</h3>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="nama">Edit organization name</Label>
								</div>
								<TextInput
									id="nama"
									name="nama"
									value={data.nama}
									placeholder="name@company.com"
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="alamat">Edit address</Label>
								</div>
								<TextInput
									id="alamat"
									name="alamat"
									type="text"
									value={data.alamat}
									onChange={handleChange}
									required
								/>
							</div>

							<div>
								<div className="mb-2 block">
									<Label htmlFor="telp">Edit phone number</Label>
								</div>
								<TextInput
									id="telp"
									name="telp"
									type="text"
									value={data.telp}
									onChange={handleChange}
									required
								/>
							</div>

							<div
								className="w-full rounded-2xl bg-[#B33739] p-2 text-center text-white cursor-pointer"
								onClick={handleClose}
							>
								<button className="w-full">
									{" "}
									<strong>Cancel</strong>
								</button>
							</div>

							<div className="w-full rounded-2xl bg-[#1F510F] p-2 text-center text-white cursor-pointer">
								<button type="submit" className="w-full">
									{isPending ? (
										<SyncLoader color="#F5CB58" size={10} />
									) : (
										<strong>Edit</strong>
									)}
								</button>
							</div>
						</div>
					</form>
				</ModalBody>
			</Modal>
		</>
	);
};

export default ModalEditOrganisasi;
