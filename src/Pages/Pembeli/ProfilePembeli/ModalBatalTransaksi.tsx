import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

import { GetCurrentTransaksi } from "../../../api/ApiTransaksiPembelian";
import { CancelTransaksi } from "../../../api/ApiTransaksiPembelian";
interface ModalBatalTransaksiProps {
    onClose: () => void;
    idPembelian: number;
    show: boolean;
    onSuccessDelete: () => void;
    dataTransaksi : TransaksiPembelian
}

type TransaksiPembelian = {
	id_pembelian: number;
	tanggal_lunas: Date;
	total: number;
    status_pengiriman: string;
	poin_pembeli: number;
    poin_didapat: number;
	
};

const ModalBatalTransaksi = ({
    onClose,
    idPembelian,
    show,
    dataTransaksi,
    onSuccessDelete
}: ModalBatalTransaksiProps) => {
    const handleClose = () => {
        onClose();
    };

    const [data, setData] = useState<TransaksiPembelian>();

    
    const fetchCurrentTransaksi = () => {
		
		GetCurrentTransaksi(idPembelian)
			.then((response) => {
				setData(response.pembelian);

			})
			.catch((err) => {
				console.log(err);
			});
	};


	useEffect(() => {
		fetchCurrentTransaksi();
	}, []);

    const submitData = (event: any, idPembelian: number) => {
        event.preventDefault();
        CancelTransaksi(idPembelian)
            .then((response) => {
                handleClose();
                toast.success(response.message);
                onSuccessDelete();
            })
            .catch((err) => {
                console.log(err);
                toast.dark(err.message);
            });
    };
    return (
        <>
            <Modal show={show} size="md" onClose={handleClose} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Apakah anda yakin akan membatalkan transaksi ini, dengan total transaksi Rp.{dataTransaksi.total}, dan dikonversi menjadi poin reward sebanyak {dataTransaksi.total / 10000}? Total poin anda setelah ini adalah {dataTransaksi.poin_didapat - 1}.
                        </h3>
                        <form action="submit" onSubmit={(e) => submitData(e, dataTransaksi.id_pembelian)}>
                            <div className="flex justify-center gap-4">
                                <Button color="failure" type="submit" className="bg-red-600 cursor-pointer text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    {"Yes, I'm sure"}
                                </Button>
                                <Button onClick={handleClose} className="bg-[#1F510F] hover:bg-[#1B480D] ">
                                    No, cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalBatalTransaksi;
