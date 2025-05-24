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
    status_perpanjangan: number;
    harga: number;
    tanggal_akhir: string;
    batas_ambil: string;
    status_barang: string;
    tanggal_ambil: string;
};

const ModalDetailTitipan = ({ idBarang, show, onClose }: any) => {
    const [data, setData] = useState<Barang | null>(null);

    const fetchBarangTitipanById = async () => {
        try {
            FetchBarangPenitipById(idBarang)
                .then((response) => {
                    console.log(response);
                    setData(response.data[0]);
                })
                .catch((error: any) => {
                    console.error("Gagal mengambil data history", error);
                });
        } catch (error: any) {
            throw error.response.data;
        }
    };

    const handleExtend = async (id_barang: number) => {
        try {
            const response = await extendBarangPenitip(id_barang);
            alert(response.message || "Barang diperpanjang");
            fetchBarangTitipanById();
        } catch (error: any) {
            alert(error.message || "Gagal memperpanjang barang");
        }
    };

    const handleAmbil = async (id_barang: number) => {
        try {
            const response = await ambilBarangPenitip(id_barang);
            alert(response.message || "Barang diambil");
            fetchBarangTitipanById();
        } catch (error: any) {
            alert(error.message || "Gagal mengambil barang");
        }
    }


    useEffect(() => {
        fetchBarangTitipanById();
    }, []);

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <Modal show={show} onClose={handleClose} dismissible>
                <ModalHeader>Titipan Detail</ModalHeader>
                <ModalBody>
                    {data === null ? (
                        <>
                            <div className="flex justify-center">
                                <SyncLoader size={10} color="#F5CB58" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex max-sm:flex-wrap gap-6">
                                <div className="w-1/2">
                                    <img
                                        src={data.foto}
                                        className="object-cover w-full h-full"
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <p className="text-3xl font-semibold text-black">
                                        {data.nama_barang}
                                    </p>
                                    <div className="flex gap-4 mt-2">

                                        <p className="font-bold">
                                            Status :{" "}
                                            <span className="text-gray-600">{data.status_barang}</span>
                                        </p>
                                    </div>
                                    <p className="text-2xl font-bold text-green-600 mt-2">
                                        Rp {data.harga}
                                    </p>
                                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                                    {/* <p className='text-lg font-bold '>ini toko penitipnya</p> */}
                                    <p className="text-md font-semibold ">Description :</p>
                                    <p className="text-sm font-normal text-gray-500 break-words whitespace-normal">
                                        {data.deskripsi}
                                    </p>


                                </div>
                            </div>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    {data && (
                        <div className="flex gap-4">
                            {data.status_barang === "Tersedia" && (
                                <div className="flex gap-4">
                                    {Number(data.status_perpanjangan) !== 1 && (
                                        <Button color="green" onClick={() => handleExtend(data.id_barang)}>
                                            Extend
                                        </Button>
                                    )}
                                    <Button color="red" onClick={() => handleAmbil(data.id_barang)}>
                                        Pickup
                                    </Button>
                                </div>
                            )}
                            {data.status_barang === "Belum Diambil" && (
                                <Button color="yellow" disabled>
                                    Masa Pengambilan
                                </Button>
                            )}

                            {data.status_barang === "Hangus" && (
                                <Button color="red" >
                                    Hangus
                                </Button>
                            )}


                        </div>
                    )}
                </ModalFooter>

            </Modal>
        </>
    );
};

export default ModalDetailTitipan;
