import useAxios from ".";
import { getToken } from "./ApiPembeli";

const FetchAlamat = async () => {
    try{
        const response = await useAxios.get("/fetchAlamat",{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            }
        });
        return response.data;
    }catch(error : any){
        throw error.response.data;
    }

}

export {FetchAlamat};