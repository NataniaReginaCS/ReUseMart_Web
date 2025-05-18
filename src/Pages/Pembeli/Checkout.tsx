import React from "react";
import { FileInput, Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Timer({ secondsLeft }: { secondsLeft: number }) {
	const [seconds, setSeconds] = React.useState(secondsLeft);

	React.useEffect(() => {
		if (seconds <= 0) return;
		const interval = setInterval(() => {
			setSeconds((s) => s - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [seconds]);

	const minutes = Math.floor(seconds / 60);
	const sec = seconds % 60;

	return (
		<span className="font-mono text-red-600">
			{minutes.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
		</span>
	);
}

function UploadBuktiPembayaran() {
	const [file, setFile] = React.useState<File | null>(null);
	const [preview, setPreview] = React.useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selected = e.target.files?.[0];
		setFile(selected || null);
		if (selected) {
			const reader = new FileReader();
			reader.onloadend = () => setPreview(reader.result as string);
			reader.readAsDataURL(selected);
		} else {
			setPreview(null);
		}
	};

	return (
		<div>
			<label className="block font-semibold mb-2">
				Upload Bukti Pembayaran
			</label>
			{/* <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-2"
            /> */}
			<FileInput
				id="file"
				name="foto"
				accept="image/*"
				onChange={handleFileChange}
			/>
			{preview && (
				<div className="mt-2">
					<span className="block mb-1">Preview:</span>
					<img
						src={preview}
						alt="Preview Bukti Pembayaran"
						className="w-full max-h-64 object-contain border rounded"
					/>
				</div>
			)}
		</div>
	);
}

const Checkout = () => {
	const { nomor_nota } = useParams();
	const location = useLocation();
	const pembelian = location.state?.pembelian;

	if (!pembelian) {
		return <p>Data pembelian tidak ditemukan.</p>;
	}

	const tanggalLaku = new Date(pembelian.tanggal_laku);
	const now = new Date();

	// Hitung waktu target = tanggal_laku + 15 menit (900.000 ms)
	const targetTime = new Date(tanggalLaku.getTime() + 15 * 60 * 1000);

	// Hitung sisa detik (jika sudah lewat, 0)
	const diffSeconds = Math.max(
		0,
		Math.floor((targetTime.getTime() - now.getTime()) / 1000)
	);

	return (
		<div className="h-screen items-center justify-center flex w-full">
			<div className="max-w-md w-full mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
				{/* Timer */}
				<div className="flex items-center justify-between mb-4">
					<span className="text-lg font-semibold">Sisa Waktu Pembayaran:</span>
					<Timer secondsLeft={diffSeconds} />
				</div>

				{/* Bank Info */}
				<div className="flex items-center mb-4">
					<img
						src="https://landbank.co.id/wp-content/uploads/2025/05/bca-logo-25-ist.jpg"
						alt="Logo Bank"
						className="w-25 h-25 mr-4 object-contain"
					/>
					<div>
						<div className="font-semibold">Bank BCA</div>
						<div>
							No. Rekening: <span className="font-mono">1234567890</span>
						</div>
						<div>a.n. PT Reusemart Indonesia</div>
					</div>
				</div>

				{/* Nota & Total */}
				<div className="mb-4">
					<div className="flex justify-between">
						<span className="font-semibold">Nomor Nota:</span>
						<span className="font-mono">{pembelian.nomor_nota}</span>
					</div>
					<div className="flex justify-between">
						<span className="font-semibold">Total Tagihan:</span>
						<span className="font-bold text-green-600">
							Rp {pembelian.total}
						</span>
					</div>
				</div>

				<UploadBuktiPembayaran />

				<Button className="justify-self-center mt-6">Confirm Payment</Button>
			</div>
		</div>
	);
};

export default Checkout;
