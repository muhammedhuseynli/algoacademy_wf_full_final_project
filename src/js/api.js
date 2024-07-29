import axios from 'axios';

const api = axios.create({
    baseURL:"http://192.168.0.7:3001/api"
});

export const registerUser = async (username,password)=>{
    try{
        const response = await api.post('/register', {username, password});
        return response.data;
    }catch(error){
        throw error.response.data;
    }
}

export const loginUser = async (username,password)=>{
    try{
        const response = await api.post('/login', {username, password});
        return response.data;
    }catch(error){
        throw error.response.data;
    }
}
