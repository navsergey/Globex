import api from "./api.instance.ts";

export async function getUsers (){
    const {data} = await api.get(`http://localhost:3001/`);
    return data
}

export async function  getUserByName (term : string = 'fer'){
    const responce = await api.get(`http://localhost:3001/`,{
        params: {
            term
        }
    });
    return responce;
}