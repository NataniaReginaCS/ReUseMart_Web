import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAxios from "../api";
import { toast } from "react-toastify";

type ProtectedRoutesProps = {
	allowedRoles: string[];
	children: any;
};

const ProtectedRoutes = ({ allowedRoles, children }: ProtectedRoutesProps) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [role, setRole] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchRole = async () => {
			try {
				setLoading(true);
				const response = await useAxios.get("/cekRole", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				setRole(response.data.role);
			} catch (error: any) {
				console.error("Error fetching role:", error);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};
		fetchRole();
	}, []);

	useEffect(() => {
		if (!loading && role && !allowedRoles.includes(role)) {
			toast.error("Anda tidak memiliki akses ke halaman ini.");
			navigate("/unauthorized");
		}
	}, [role, loading, allowedRoles]);

	if (!loading) {
		return children;
	}
};

export default ProtectedRoutes;
