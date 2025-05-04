import useAxios from ".";


interface RegisterData {
    nama: string;
    email: string;
    password: string;
    telepon: string;
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

export {RegisterPembeli};
