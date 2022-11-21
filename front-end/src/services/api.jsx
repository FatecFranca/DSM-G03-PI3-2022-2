import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Content-Type': 'application/json'}

});
   
export const UseApi = ()  => ({

    // Login 
    logIn: async (email, password) => {

        const response = await api.post("user/login", { email, password });
        console.log(response) 
        return response.data;                
    },
    // buscar usuario pelo id
    UserGetById: async (id) => {
        const response = await api.get("user/" + id);
        return response.data;        
    }

});

export async function createApi(data) {
    const response = await api.post("user/", data)
        
    return response.data;
}