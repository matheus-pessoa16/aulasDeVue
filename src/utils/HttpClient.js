import axios from 'axios';

const BACKEND_URL = "http://10.51.64.231:8080/signuplam";

function GET(rota) {
    return axios({
        url: `${BACKEND_URL}${rota}`,
        method: "GET"
    })
}

function POST(rota, dados){
    return axios({
        url: `${BACKEND_URL}${rota}`,
        method: "POST",
        data: dados
    })
}

function DELETE(rota, dados){
    return axios({
        url:`${BACKEND_URL}${rota}`,
        method: "DELETE",
        data : dados
    })
}

export const HttpClient = {
    GET: GET,
    POST : POST,
    DELETE: DELETE
}