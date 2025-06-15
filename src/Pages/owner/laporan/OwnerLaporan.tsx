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
    const [downloadLoading, setDownloadLoading] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    
    const handleView = async (reportId: number) => {
        try {
            let endpoint = "";
            switch (reportId) {
                case 1:
                    endpoint = "/api/laporan/penjualan-bulanan/download";
                    break;
                case 2:
                    endpoint = `/api/laporan/komisi-bulanan/download?year=${selectedYear}&month=${selectedMonth}`;
                    break;
                case 3:
                    endpoint = "/api/laporan/stok-gudang/download";
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
            window.open(url, "_blank");
        } catch (error: any) {
            toast.error(error.message || "Gagal menampilkan PDF.");
            console.error("View error:", error.message);
        }
    };

    const reports: Report[] = [
        { id: 1, title: "Laporan penjualan bulanan keseluruhan (dalam tabel dan grafik)" },
        { id: 2, title: "Laporan komisi bulanan per produk" },
        { id: 3, title: "Laporan Stok Gudang" },
        { id: 3, title: "Laporan Stok Gudang" },
    ];

    const handleDownload = async (reportId: number) => {
        try {
            setDownloadLoading(reportId);
            let endpoint = "";
            let fileName = "";

            switch (reportId) {
                case 1:
                    endpoint = "/api/laporan/penjualan-bulanan/download";
                    fileName = "Laporan_Penjualan_Bulanan";
                    break;
                case 2:
                    endpoint = `/api/laporan/komisi-bulanan/download?year=${selectedYear}&month=${selectedMonth}`;
                    fileName = `Laporan_Komisi_Bulanan_${selectedYear}_${selectedMonth}`;
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
            setDownloadLoading(null);
        }
    };

    const filteredData = reports.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toString().includes(searchTerm)
        );
    });

    const TABLE_HEAD = ["No", "Judul Laporan", "Aksi"];

    const months = [
        { value: "1", label: "Januari" },
        { value: "2", label: "Februari" },
        { value: "3", label: "Maret" },
        { value: "4", label: "April" },
        { value: "5", label: "Mei" },
        { value: "6", label: "Juni" },
        { value: "7", label: "Juli" },
        { value: "8", label: "Agustus" },
        { value: "9", label: "September" },
        { value: "10", label: "Oktober" },
        { value: "11", label: "November" },
        { value: "12", label: "Desember" },
    ];

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
                                                        <div className="flex flex-col items-center gap-2">
                                                            {report.id === 2 && (
                                                                <div className="flex gap-2 mb-2">
                                                                    <input
                                                                        type="number"
                                                                        min="2000"
                                                                        max="2099"
                                                                        placeholder="Tahun"
                                                                        value={selectedYear}
                                                                        onChange={(e) => setSelectedYear(e.target.value)}
                                                                        className="border rounded px-2 py-1 w-24"
                                                                    />
                                                                    <select
                                                                        value={selectedMonth}
                                                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                                                        className="border rounded px-2 py-1"
                                                                    >
                                                                        <option value="" disabled>Bulan</option>
                                                                        {months.map((m) => (
                                                                            <option key={m.value} value={m.value}>{m.label}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            )}
                                                            <div className="flex flex-row gap-2">
                                                                <Button
                                                                    size="sm"
                                                                    onClick={async () => {
                                                                        if (report.id === 2 && !selectedMonth) {
                                                                            toast.error("Silakan pilih bulan terlebih dahulu.");
                                                                            return;
                                                                        }
                                                                        await handleView(report.id);
                                                                    }}
                                                                    className="bg-blue-500 hover:bg-blue-600 text-white items-center flex justify-center mb-2"
                                                                >
                                                                    <FontAwesomeIcon icon={faDownload} />
                                                                    <span className="ml-2">View</span>
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    onClick={() => {
                                                                        if (report.id === 2 && !selectedMonth) {
                                                                            toast.error("Silakan pilih bulan terlebih dahulu.");
                                                                            return;
                                                                        }
                                                                        handleDownload(report.id);
                                                                    }}
                                                                    disabled={downloadLoading === report.id}
                                                                    className="bg-green-500 hover:bg-green-600 text-white items-center flex justify-center"
                                                                >
                                                                    {downloadLoading === report.id ? (
                                                                        <SyncLoader size={6} color="#ffffff" className="ml-1" />
                                                                    ) : (
                                                                        <>
                                                                            <FontAwesomeIcon icon={faDownload} />
                                                                            <span className="ml-2">Unduh</span>
                                                                        </>
                                                                    )}
                                                                </Button>
                                                            </div>
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
