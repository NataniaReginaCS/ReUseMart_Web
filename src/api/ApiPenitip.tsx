import useAxios from ".";
import { getToken } from "./ApiPembeli";

const FetchPenitipByLogin = async () => {
    try {
        const response = await useAxios.get("/fetchPenitipByLogin", {
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

const FetchHistoryTransaksi = async () =>{
    try{
        const response = await useAxios.get("/fetchHistoryTransaksi",{
            headers :{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            }
        });

        return response.data;


    }catch(error: any){
        throw error.response.data;
    }
}

const FetchHistoryTransaksiById = async (id_barang : number) =>{
    try{
        const response = await useAxios.get(`/fetchHistoryTransaksiById/${id_barang}`, {
            headers :{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });

        return response.data;

    }catch(error: any){
        throw error.response.data;
    }
};


export { FetchPenitipByLogin, FetchHistoryTransaksi, FetchHistoryTransaksiById };
