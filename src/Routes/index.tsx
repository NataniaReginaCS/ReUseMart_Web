import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Item from "../Pages/Item";
import About from "../Pages/About";
import Profile from "../Pages/Pembeli/ProfilePembeli/profile";
import EditProfile from "../Pages/Pembeli/ProfilePembeli/edit_profile";
import AdminOrganisasi from "../Pages/admin/Organisasi/AdminOrganisasi";
import Order from "../Pages/Pembeli/ProfilePembeli/Order";

import AdminPegawai from "../Pages/admin/pegawai/AdminPegawai";
import ResetPasswordPegawai from "../Pages/admin/pegawai/ResetPasswordPegawai";

import Login from "../Pages/auth/login";
import RegisterPembeli from "../Pages/auth/register_pembeli";
import RegisterOrganisasi from "../Pages/auth/register_organisasi";
import ForgotPassword from "../Pages/auth/forgotPassword";
import ResetPassword from "../Pages/auth/resetPassword";
import Unauthorized from "./Unauthorized";

import ProfileOrganisasi from "../Pages/profile_organisasi/ProfileOrganisasi";
import OrderOrganisasi from "../Pages/profile_organisasi/OrderOrganisasi";
import RequestDonasi from "../Pages/profile_organisasi/RequestDonasi";

//Penitip
import ProfilePenitip from "../Pages/Profile_Penitip/ProfilePenitip";
import HistoryTransaksiPenitip from "../Pages/Profile_Penitip/HistoryTransaksiPenitip";

//CS
import PaymentVerification from "../Pages/Cs/Verifikasi_Pembayaran/VerifikasiPembayaran";


import Cart from "../Pages/Pembeli/Cart";
import ProtectedRoutes from "./ProtectedRoutes";
import OwnerDonasi from "../Pages/owner/donasi/OwnerDonasi";
import OwnerHistory from "../Pages/owner/history/OwnerHistory";
import OrderDetails from "../Pages/Pembeli/ProfilePembeli/OrderDetails";
import Diskusi from "../Pages/Cs/Diskusi/DiskusiHome"
import CSPenitip from "../Pages/Cs/Penitip/CSPenitip";

//Gudang
import GudangPenitipan from "../Pages/gudang/penitipan/GudangPenitipan";


//Pembeli
import Checkout from "../Pages/Pembeli/Checkout";

const router = createBrowserRouter([
	{
		path: "/unauthorized",
		element: <Unauthorized />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/registerPembeli",
		element: <RegisterPembeli />,
	},
	{
		path: "/registerOrganisasi",
		element: <RegisterOrganisasi />,
	},
	{
		path: "/forgotpassword",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password",
		element: <ResetPassword />,
	},
	{
		path: "/owner",
		element: (
			<ProtectedRoutes allowedRoles={["Owner"]}>
				<MainLayout />
			</ProtectedRoutes>
		),
		children: [

			{
				path: "donasi",
				element: <OwnerDonasi />,
			},
			{
				path: "history",
				element: <OwnerHistory />,
			}

		],


	},
	{
		path: "/CS",
		element: (
			<ProtectedRoutes allowedRoles={["CS"]}>
				<Outlet />
			</ProtectedRoutes>
		),
		children: [
			{
				path: "diskusi",
				element: <Diskusi />
			},
			{
				path: "penitip",
				element: <CSPenitip />
			},
			{
				path : "payment-verification",
				element : <PaymentVerification />
			}
		]
	},
	{
		path: "/admin",
		element: (
			<ProtectedRoutes allowedRoles={["Admin"]}>
				<Outlet />
			</ProtectedRoutes>
		),
		children: [
			{
				path: "organisasi",
				element: <AdminOrganisasi />,
			},
			{
				path: "pegawai",
				element: <AdminPegawai />,
			},
			{
				path: "reset-password-pegawai",
				element: <ResetPasswordPegawai />,
			}
		],
	},
	{
		path: "/gudang",
		element: (
			<ProtectedRoutes allowedRoles={["Gudang"]}>
				<MainLayout />
			</ProtectedRoutes>
		),
		children: [
			{
				path: "penitipan",
				element: <GudangPenitipan />,
			}
		],
	},
	{
		path: "/penitip",
		element: (
			<ProtectedRoutes allowedRoles={["Penitip"]}>
				<MainLayout />
			</ProtectedRoutes>
		),
		children: [
			{
				path: "profile",
				element: <ProfilePenitip />,
			},
			{
				path: "history-transaksi",
				element: <HistoryTransaksiPenitip />,
			},
		],
	},
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/item",
				element: <Item />,
			},
		],
	},
	{
		element: (
			<ProtectedRoutes allowedRoles={["Organisasi"]}>
				<MainLayout />
			</ProtectedRoutes>
		), children: [

			{
				path: "/profile-organisasi",
				element: <ProfileOrganisasi />,
			},
			{
				path: "/order-organisasi",
				element: <OrderOrganisasi />,
			},
			{
				path: "/request-donasi",
				element: <RequestDonasi />,
			},
		]
	},
	{
		element: (
			<ProtectedRoutes allowedRoles={["Pembeli"]}>
				<MainLayout />
			</ProtectedRoutes>
		),
		children: [
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/edit_profile",
				element: <EditProfile />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/order",
				element: <Order />,
			},
			{
				path: "/order-details/:id",
				element: <OrderDetails />,
			},
			{
				path: "/edit_profile",
				element: <EditProfile />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/checkout/:nomor_nota",
				element: <Checkout />,
			}

		],
	},
]);

const AppRouter = () => {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<Toaster position="top-center" richColors />
			<RouterProvider router={router} />
		</>
	);
};

export default AppRouter;
