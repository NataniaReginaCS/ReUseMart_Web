import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faDownload } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { Button } from "flowbite-react";

import SideBarNavOwner from "../../../Components2/SideBarNavOwner";

type Report = {
    id: number;
    title: string;
};

const BASE_URL = "http://127.0.0.1:8000";

const OwnerLaporan = () => {
    const [isLoading] = useState<boolean>(false);
    const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const reports: Report[] = [
        { id: 1, title: "Laporan penjualan bulanan keseluruhan (dalam tabel dan grafik)" },
        { id: 2, title: "Laporan komisi bulanan per produk" },
        { id: 3, title: "Laporan Stok Gudang" },
    ];

    const handleDownload = async (reportId: number) => {
        try {
            setDownloadLoading(true);
            let endpoint = "";
            let fileName = "";

            switch (reportId) {
                case 1:
                    endpoint = "/api/laporan/penjualan-bulanan/download";
                    fileName = "Laporan_Penjualan_Bulanan";
                    break;
                case 2:
                    endpoint = "/api/laporan/komisi-bulanan/download";
                    fileName = "Laporan_Komisi_Bulanan";
                    break;
                case 3:
                    endpoint = "/api/laporan/stok-gudang/download";
                    fileName = "Laporan_Stok_Gudang";
                    break;
                default:
                    throw new Error("Laporan tidak ditemukan.");
            }

            const fullUrl = `${BASE_URL}${endpoint}`;
            const response = await fetch(fullUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    Accept: "application/pdf",
                },
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}_${new Date().toISOString().split("T")[0]}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            toast.success("PDF berhasil diunduh!");
        } catch (error: any) {
            toast.error(error.message || "Gagal mengunduh PDF.");
            console.error("Download error:", error.message);
        } finally {
            setDownloadLoading(false);
        }
    };

    const filteredData = reports.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toString().includes(searchTerm)
        );
    });

    const TABLE_HEAD = ["No", "Judul Laporan", "Aksi"];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row p-5 gap-5 lg:p-10 lg:gap-10">
                <SideBarNavOwner />
                {isLoading ? (
                    <div className="flex justify-center items-center w-full h-64">
                        <SyncLoader color="#F5CB58" size={10} />
                        <p className="mt-2 ml-4">Loading...</p>
                    </div>
                ) : (
                    <div className="bg-white w-full border border-gray-300 shadow-md rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-900">Download Laporan</h2>
                            </div>
                            <div className="relative w-full sm:w-1/2 mb-6">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full h-10 bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Cari laporan..."
                                />
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-[#2A3042] text-white text-sm">
                                        <tr>
                                            {TABLE_HEAD.map((head) => (
                                                <th
                                                    key={head}
                                                    className="px-4 py-3 text-center font-semibold tracking-wide"
                                                >
                                                    {head}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-sm text-center">
                                        {filteredData.map((report) => {
                                            return (
                                                <tr
                                                    key={report.id}
                                                    className="hover:bg-gray-50 transition-all"
                                                >
                                                    <td className="px-4 py-3">{report.id}</td>
                                                    <td className="px-4 py-3 text-left">{report.title}</td>
                                                    <td className="py-3 px-4">
                                                        <div className="flex justify-center">
                                                            <Button
                                                                size="sm"
                                                                onClick={() => handleDownload(report.id)}
                                                                disabled={downloadLoading}
                                                                className="bg-green-500 hover:bg-green-600 text-white items-center flex justify-center"
                                                            >
                                                                {downloadLoading ? (
                                                                    <SyncLoader size={6} color="#ffffff" className="ml-1" />
                                                                ) : (
                                                                    <>
                                                                        <FontAwesomeIcon icon={faDownload} />
                                                                        <span className="ml-2">Unduh</span>
                                                                    </>
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>                                        
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OwnerLaporan;