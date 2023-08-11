import axios from "axios";
//import getToken from "./utils/authUtils";

//const baseURL='https://password-reset-be-wmkd.onrender.com/api/users'
const baseURL='http://localhost:3001/api'

console.log(baseURL)

const authInstance= axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers : {
        'Content-Type' : 'application/json',
    }
});

const protectedInstance= axios.create({
    baseURL : baseURL,
    timeout : 5000,
});


protectedInstance.interceptors.request.use(config =>{
    console.log("ENTERED")
    console.log("Token  " +sessionStorage.token)
    if(sessionStorage.token){
        config.headers['Authorization'] = sessionStorage.token;
    }
    return config;
},error =>{
    return Promise.reject(error);
});

export default {
    authInstance,
    protectedInstance
}