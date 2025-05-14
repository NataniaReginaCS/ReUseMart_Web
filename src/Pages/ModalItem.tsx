import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import {
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	TextInput,
} from "flowbite-react";


interface ModalEditPegawaiProps {
	dataPegawai: {
        id_barang: number;
        id_penitipan: number;
        id_kategori: string;
        id_hunter: string;
        nama: string;
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

	};
	onClose: () => void;
	idBarang: number;
	show: boolean;
	onSuccessEdit: () => void;
}

const ModalEditPegawai = ({
	dataPegawai,
	onClose,
	idBarang,
	show,
	onSuccessEdit,
}: ModalEditPegawaiProps) => {
	const [data, setData] = useState({
		...dataPegawai,
        id_barang: idBarang,
        id_penitipan: dataPegawai.id_penitipan,
        id_kategori: dataPegawai.id_kategori,
        id_hunter: dataPegawai.id_hunter,
        nama: dataPegawai.nama,
        deskripsi: dataPegawai.deskripsi,
        foto: dataPegawai.foto,
        berat: dataPegawai.berat,
        isGaransi: dataPegawai.isGaransi,
        akhir_garansi: dataPegawai.akhir_garansi,
        status_perpanjangan: dataPegawai.status_perpanjangan,
        harga: dataPegawai.harga,
        tanggal_akhir: dataPegawai.tanggal_akhir,
        batas_ambil: dataPegawai.batas_ambil,
        status_barang: dataPegawai.status_barang,
	});
	useState(dataPegawai);

	const handleClose = () => {
		onClose();
	};

	return (
		<>
			<Modal show={show} dismissible size="md" popup onClose={handleClose}>
				<ModalHeader />
				<ModalBody>
                    <div>
                        <h3 className="text-xl font-bold text-center"> {data.id_barang} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.nama} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.deskripsi} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.foto} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.berat} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.isGaransi} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.akhir_garansi} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.status_perpanjangan} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.harga} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.tanggal_akhir} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.batas_ambil} </h3>
                        <h3 className="text-xl font-bold text-center"> {data.status_barang} </h3>
							<div
								className="w-full rounded-2xl bg-[#B33739] p-2 text-center text-white cursor-pointer"
								onClick={handleClose}
							>
								<button className="w-full cursor-pointer">
									{" "}
									<strong>Cancel</strong>
								</button>
							</div>
						</div>
					
				</ModalBody>
			</Modal>
		</>
	);
};

export default ModalEditPegawai;
