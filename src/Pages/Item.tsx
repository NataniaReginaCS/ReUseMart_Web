import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { FetchBarangById, FetchRelatedProducts } from "../api/ApiBarang";
import { FetchDiskusi, AddDiskusi } from "../api/ApiDiskusi";
import { getToken } from "../api/ApiPembeli";
import { toast } from "react-toastify";

type Barang = {
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
type Diskusi = {
    pesan: string;
    nama: string;
    tanggal: string;
    role: string;
    foto: string;
};

const Item = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const barang = location.state?.barang || null;
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Barang[]>([]);
    const [diskusi, setDiskusi] = useState<Diskusi[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [pesan, setPesan] = useState<string>("");

    const addDiskusi = (id_barang: number) => {
        if (!pesan) {
            toast.error("Please enter a message");
            return;
        }
        setIsLoading(true);

    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPesan(event.target.value);
    };


    const fetchBarangById = (id_barang: number) => {
        setIsLoading(true);
        FetchBarangById(id_barang)
            .then((response) => {
                const barang = response.data;
                setData([barang]);
                setIsLoading(false);
                navigate("/item", { state: { barang } });
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const namaGaransi = (akhir_garansi: Date) => {
        const currentDate = new Date();
        const endDate = new Date(akhir_garansi);
        const daysDiff = Math.ceil((endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
        if (daysDiff > 0) return `${daysDiff} days left`;
        if (daysDiff === 0) return "Warranty expired today";
        return "Warranty expired";
    };

    const namaKategori = (id_kategori: string) => {
        const id = parseInt(id_kategori);
        if (id < 11) return "Electronic & Gadget";
        if (id < 21) return "Clothing & Accessories";
        if (id < 31) return "Home Furnishings";
        if (id < 41) return "Books & School Supplies";
        if (id < 51) return "Hobbies & Collectibles";
        if (id < 61) return "Baby & Kids Equipment";
        if (id < 71) return "Automotive";
        if (id < 81) return "Garden & Outdoor Supplies";
        if (id < 91) return "Office & Industrial Equipment";
        return "Cosmetics & Personal Care";
    };

    const fetchRelatedProducts = (id_kategori: string) => {
        setIsLoading(true);
        FetchRelatedProducts(id_kategori)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchRelatedProducts(barang.id_kategori);
        setToken(getToken());
    }, []);

    return (
        <div className="flex flex-col h-full bg-white p-6 md:p-12">
            <div className="flex flex-wrap items-center gap-2 text-sm">
                <FontAwesomeIcon className="text-gray-500" icon={faHouse} />
                <FontAwesomeIcon className="text-gray-500" icon={faChevronRight} />
                <p className="font-bold text-gray-500">Shop</p>
                <FontAwesomeIcon className="text-gray-500" icon={faChevronRight} />
                <p className="font-bold text-green-500">Detail Product</p>
            </div>

            <div className="flex flex-col lg:flex-row mt-4 gap-6 lg:gap-12">
                <div className="w-full lg:w-1/3 h-96 lg:h-[600px] bg-gray-500">
                    <img src={barang.foto} alt={barang.nama} className="w-full h-full object-cover rounded-lg" />
                </div>

                <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-[600px]">
                    <p className="text-2xl md:text-3xl font-semibold text-black">{barang.nama}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                        <p className="font-bold">Barang Id : <span className="text-gray-600">{barang.id_barang}</span></p>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-green-600 mt-2">Rp {barang.harga}</p>
                    <hr className="my-2 border-t w-full border-gray-300" />
                    <p className="text-md font-semibold">Description :</p>
                    <p className="text-sm text-gray-500 break-words whitespace-normal">{barang.deskripsi}</p>
                    <hr className="my-2 border-t w-full border-gray-300" />
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-4 justify-center">
                        <Button className="w-full sm:w-[45%] h-10 bg-black hover:bg-gray-100 hover:text-black text-white border border-black">Add to Cart</Button>
                        <Button className="w-full sm:w-[45%] h-10 bg-gray-100 hover:bg-black hover:text-white text-black border border-black">Buy Now</Button>
                    </div>
                    <hr className="my-2 border-t w-full border-gray-300" />
                    <p className="text-sm font-bold">Category: <span className="text-sm font-normal text-gray-500">{namaKategori(barang.id_kategori)}</span></p>
                    <p className="text-sm font-bold">Warranty: <span className="text-sm font-normal text-gray-500">{namaGaransi(barang.akhir_garansi)}</span></p>
                </div>
            </div>


            
        </div>
    );
};

export default Item;
