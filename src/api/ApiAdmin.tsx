import useAxios from ".";
import { getToken } from "./ApiPembeli";

const FetchOrganisasi = async () => {
    try {
        const response = await useAxios.get("/fetchOrganisasi", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error : any) {
        throw error.response.data  ;
    }
};

const UpdateOrganisasi = async (data : FormData, idOrganisasi : number) => {
    try {
        const response = await useAxios.post(`/updateOrganisasi/${idOrganisasi}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error : any) {
        throw error.response.data  ;
    }
};

const DeleteOrganisasi = async (idOrganisasi : number) => {
    try {
        const response = await useAxios.delete(`/deleteOrganisasi/${idOrganisasi}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`,
                
            },
        });
        return response.data;
    } catch (error : any) {
        throw error.response.data  ;
    }
}

export {FetchOrganisasi, UpdateOrganisasi, DeleteOrganisasi};