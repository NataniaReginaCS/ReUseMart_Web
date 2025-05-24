import useAxios from ".";
import { getToken } from "./ApiPembeli";


export const FetchTransaksiByGudang = async () => {
    try {
        const response = await useAxios.get(`/fetchTransaksiByGudang`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });

        return response.data;

    } catch (error: any) {
        throw error.response.data;
    }


};

export const FetchTransaksiGudangById = async (id_barang: number) => {
    try {
        const response = await useAxios.get(`/fetchTransaksiGudangById/${id_barang}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });

        return response.data;

    } catch (error: any) {
        throw error.response.data;
    }
};

export const FetcHDataPembelian = async (id_pembelian: number) => {
    try {
        const response = await useAxios.get(`/fetchDataPembelian/${id_pembelian}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });

        return response.data;

    } catch (error: any) {
        throw error.response.data;
    }
};

export const FetchDataPegawai = async () => {
    try {
        const response = await useAxios.get(`/fetchDataPegawai`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });

        return response.data;

    } catch (error: any) {
        throw error.response.data;
    }


};


export const updateTanggalPengiriman = async (id: number, data: any) => {
    try {
        const response = await useAxios.put(`/updateTanggalPengiriman/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};