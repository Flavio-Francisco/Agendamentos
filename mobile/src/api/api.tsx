import axios from 'axios'

const accessToken = 'APP_USR-4760352099232242-110116-bbf3dce4fb19bf4f4454f1dd97091ef8-254304828'

export const api = axios.create({
    baseURL: 'http://10.0.0.2:8080'
});

export const apiMercadoPago = axios.create({
    baseURL: 'https://api.mercadopago.com/checkout/preferences',
    headers: {
        'Authorization': `Bearer APP_USR-4760352099232242-110116-bbf3dce4fb19bf4f4454f1dd97091ef8-254304828`
    }
});

