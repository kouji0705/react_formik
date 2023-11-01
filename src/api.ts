import axios from "axios"


const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const postApi = async (payload:any) => {
    const response = await axios.post(apiUrl, payload);
    return response;
}