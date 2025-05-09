import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import hpitem from '../assets/images/hpitem.png';
import item1 from '../assets/images/item1.png';
import { Textarea } from '../components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { FetchBarang, FetchBarangById, FetchBarangByKategori, FetchRelatedProducts } from '../api/ApiBarang';
import { set } from 'date-fns';
const items = [
    { name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Samsung Galaxy S25 Ultra", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Home Furnishings", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Books & School", image: item1, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
    { name: "Hobbies & Collectibles", image: hpitem, namaPenitip: "AgusGanteng", price: "16.000.000", link: "/Item" },
];

const comments = [
    { name: "AgusGantengStore", image: hpitem, comment: "Nice product, exactly what I needed!", date: "2023-10-01" },
    { name: "KifKontol", image: hpitem, comment: "Delivery was quick and the packaging was good. Definitely recommend it.", date: "2023-10-01" },
    { name: "Lopek", image: hpitem, comment: "I was honestly a bit skeptical at first, but this turned out way better than expected. The quality is solid, the materials feel premium, and everything works perfectly out of the box. Kudos to the team!", date: "2023-10-01" },
]

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


const Item = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const barang = location.state?.barang || null; 
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Barang[]>([]);
    
    const fetchBarangById = (id_barang: number) => {
        setIsLoading(true);
        FetchBarangById(id_barang)
            .then((response) => {
                const barang = response.data;
                setIsLoading(false);
                navigate('/item', { state: { barang } });
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    const namaGaransi = (akhir_garansi: Date) => {
        const currentDate = new Date();
        const endDate = new Date(akhir_garansi);
        const timeDiff = endDate.getTime() - currentDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (daysDiff > 0) {
            return `${daysDiff} days left`;
        } else if (daysDiff === 0) {
            return "Warranty expired today";
        } else {
            return "Warranty expired";
        }
    };

    const namaKategori = (id_kategori: string) => {
            if (parseInt(id_kategori) >= 0 && parseInt(id_kategori) < 11) {
                return "Electronic & Gadget";
            }else if (parseInt(id_kategori) >= 11 && parseInt(id_kategori) < 21) {
                return "Clothing & Accessories";
            }else if (parseInt(id_kategori) >= 21 && parseInt(id_kategori) < 31) {
                return "Home Furnishings";
            }
            else if (parseInt(id_kategori) >= 31 && parseInt(id_kategori) < 41) {
                return "Books & School Supplies";
            }
            else if (parseInt(id_kategori) >= 41 && parseInt(id_kategori) < 51) {
                return "Hobbies & Collectibles";
            }
            else if (parseInt(id_kategori) >= 51 && parseInt(id_kategori) < 61) {
                return "Baby & Kids Equipment";
            }   else if (parseInt(id_kategori) >= 61 && parseInt(id_kategori) < 71) {
                return "Automotive";
            } else if (parseInt(id_kategori) >= 71 && parseInt(id_kategori) < 81) {
                return "Garden & Outdoor Supplies";
            } else if (parseInt(id_kategori) >= 81 && parseInt(id_kategori) < 91) {
                return "Office & Industrial Equipment";
            } else if (parseInt(id_kategori) >= 91 && parseInt(id_kategori) < 101) {
                return "Cosmetics & Personal Care";
            }
    }        
    const fetchRelatedProducts = (id_kategori: string) => {
        setIsLoading(true);
        FetchRelatedProducts(id_kategori)
            .then((response) => {
                const relatedBarang = response.data;
                setData(relatedBarang);
                setIsLoading(false);
                
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

        useEffect(() => {
            fetchRelatedProducts(barang.id_kategori);
        }, []);


    return (
        <div className='flex flex-col h-full bg-white p-12'>
            <div className="flex items-center gap-2">
                <FontAwesomeIcon className="text-gray-500 text-sm" icon={faHouse} />
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-gray-500">Shop</p>
                <FontAwesomeIcon className="text-gray-500 text-sm font-extralight" icon={faChevronRight} />
                <p className="text-sm font-bold text-green-500">Detail Product</p>
            </div>
            <div className='flex mt-4 gap-12 '>
                <div className='w-1/3 h-[600px] bg-gray-500'>
                    <img src={barang.foto} alt={barang.nama} className='object-fit rounded-lg' />
                </div>
                <div className='flex flex-col w-1/2 h-[600px]'>
                    <p className='text-3xl font-semibold text-black'>{barang.nama}</p>
                    <div className='flex gap-4 mt-2'>
                        {/* <p>inibintang</p>
                        <p className='text-gray-600'>4 Review</p> */}
                        <p className='font-bold'>Barang Id : <span className='text-gray-600'>{barang.id_barang}</span></p>
                    </div>
                    <p className='text-2xl font-bold text-green-600 mt-2'>Rp {barang.harga}</p>
                    <hr className="my-2 border-t  w-[95%] border-gray-300" />
                    {/* <p className='text-lg font-bold '>ini toko penitipnya</p> */}
                    <p className='text-md font-semibold '>Description :</p>
                    <p className='text-sm font-normal text-gray-500 break-words whitespace-normal'>{barang.deskripsi}</p>
                    <hr className="my-2 border-t  w-full border-gray-300" />
                    <div className='flex gap-4 mt-4 mb-4 justify-center'>
                        <Button className='w-[45%] h-10 rounded-md bg-[#000000] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black'>
                            Add to Cart
                        </Button>
                        <Button className='w-[45%] h-10 rounded-md bg-[#F0F0F0] hover:bg-[#000000] hover:text-white text-black border-1 border-black'>
                            Buy Now
                        </Button>
                    </div>
                    <hr className="my-2 border-t  w-full border-gray-300" />
                    <p className='text-sm font-bold'>Category: <span className='text-sm font-normal text-gray-500'>{namaKategori(barang.id_kategori)}</span></p>
                    <p className='text-sm font-bold'>Warranty: <span className='text-sm font-normal text-gray-500'>{namaGaransi(barang.akhir_garansi)}</span></p>
                </div>
            </div>
            <div className='flex flex-col w-full h-full items-center justify-start'>
                <p className="mt-32 text-3xl font-semibold text-black mb-6">Related Products</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => fetchBarangById(item.id_barang)}
                            className="w-64 h-72 bg-white p-4 shadow-md rounded-lg border flex flex-col items-start  hover:scale-105 transition-transform"
                        >
                            <img src={item.foto} alt={item.nama} className="h-[60%] w-full object-contain" />
                            <p className='mt-2 font-light text-gray-400 text-xs'>{item.berat}</p>
                            <p className="mt-2 font-normal break-words whitespace-normal ">{item.nama}</p>
                            <p className='font-bold text-green-900 text-md'>Rp {item.harga}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-full h-full items-start rounded-lg mt-12 border-1 border-gray-300 p-4'>
                <p className="text-xl font-semibold text-black ">Add Discussion</p>
                <hr className="my-2 border-t  w-full border-gray-300" />
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea className='h-20' placeholder="Type your comment here." id="message" />
                </div>
                <Button className='mt-4 mb-4 rounded-md bg-[#000000] hover:bg-[#F0F0F0] hover:text-black text-white border-1 border-black'>Add Comment</Button>
                <hr className="my-2 border-t  w-full border-gray-300" />

                <div className='flex flex-col gap-8 mt-4 ml-8 justify-center'>
                    {comments.map((comment, index) => (
                        <div className='flex gap-4 items-center' key={index}
                        >
                            <img className='rounded-[50px] w-12 h-12 bg-gray-500    ' src={item1} alt="" />
                            <div className='flex flex-col w-full h-full'>
                                <p className='font-bold text-black'>{comment.name}<span className='ml-4 text-xs text-gray-500 font-normal '>{comment.date}</span></p>
                                <p className='break-words whitespace-normal'>{comment.comment}</p>
                            </div>
                        </div>))}

                </div>
            </div>

        </div>
    );
}
export default Item