import useAxios from ".";
import { getToken } from "./ApiPembeli";

const CreatePembelian = async (data: {
	metode_pengiriman: string; 
	id_alamat?: number;
	status_pengiriman: string; 
	poin_digunakan: number;
}) => {
    try{
        const response = await useAxios.post("/checkout", data, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });
        return response.data;
    }catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};

export { CreatePembelian };
