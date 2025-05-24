import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "flowbite-react";
import { useState, useEffect } from "react";
import { ambilBarangPenitip, FetchBarangPenitipById } from "../../api/ApiPenitip";
import { SyncLoader } from "react-spinners";
import Frieren from "../../assets/images/Frieren.jpg";
import { extendBarangPenitip } from "../../api/ApiPenitip";
import { FetchTransaksiGudangById } from "../../api/ApiGudang";

const ModalDetailTransaksi = ({ idPembelian, show, onClose }: any) => {
    const [dataHistory, setDataHistory] = useState<any>(null);

    const fetchTransaksiGudang = async () => {
        try {
            FetchTransaksiGudangById(idPembelian)
                .then((response) => {
                    console.log(response);
                    setDataHistory(response.data);
                })
                .catch((error: any) => {
                    console.error("Gagal mengambil data history", error);
                });
        } catch (error: any) {
            throw error.response.data;
        }
    };

    useEffect(() => {
        fetchTransaksiGudang();
    }, []);





    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <Modal show={show} onClose={handleClose} dismissible size="7xl"> {/* Perbesar modal */}
                <ModalHeader>Titipan Detail</ModalHeader>
                <ModalBody>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-center border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">Photo</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Sold Date</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!dataHistory ? (
                                    <tr>
                                        <td colSpan={6} className="py-10 text-gray-500">
                                            Loading...
                                        </td>
                                    </tr>
                                ) : dataHistory.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="py-10 text-gray-500">
                                            No data found.
                                        </td>
                                    </tr>
                                ) : (
                                    dataHistory.map((item: any, index: number) => (
                                        <tr key={index} className="border-t border-gray-200">
                                            <td className="px-4 py-2">
                                                <img
                                                    src={item.foto_barang}
                                                    alt={item.nama_barang}
                                                    className="w-20 h-20 object-cover mx-auto rounded"
                                                />
                                            </td>
                                            <td className="px-4 py-2">{item.nama_barang}</td>
                                            <td className="px-4 py-2">Rp{item.harga.toLocaleString()}</td>
                                            <td className="px-4 py-2">{item.tanggal_lunas}</td>
                                            <td className="px-4 py-2">{item.status_barang}</td>

                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="gray" onClick={handleClose}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    );
};

export default ModalDetailTransaksi;
