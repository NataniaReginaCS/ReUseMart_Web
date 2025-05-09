import useAxios from ".";
import { getToken } from "./ApiPembeli";

const FetchPenitip = async () => {
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

export { FetchPenitip };
