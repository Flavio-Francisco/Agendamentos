import axios from 'axios'


export const api = axios.create({
    baseURL:'http://192.168.104.101:8080'
});


