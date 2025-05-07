import useAxios from ".";


interface RegisterData {
    nama: string;
    email: string;
    password: string;
    telepon: string;
    foto?: string;
}

interface RegisterOrganisasiData {
    nama: string;
    email: string;
    password: string;
    telp : string;
    alamat: string;
    foto?: string;
}

const RegisterPembeli = async (data: RegisterData) =>{
    try{
        const response = await useAxios.post('/registerPembeli', data);
        return response.data;
    }catch(error : any){
        throw error.response?.data;
    }
};

const RegisterOrganisasi = async (data: RegisterOrganisasiData) =>{
    try{
        const response = await useAxios.post('/registerOrganisasi', data);
        return response.data;
    }catch(error : any){
        throw error.response?.data;
    }
};

export {RegisterPembeli, RegisterOrganisasi};
