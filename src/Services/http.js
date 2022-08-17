import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request((request) => {
    console.log(request);
    return request
} , (error) => {
    console.log(error);
    return Promise.reject()
});

axios.interceptors.response((response) => {
    console.log(response);
    return response
} , (error) => {
    console.log(error);
    return Promise.reject()
})

const http = {
    get:axios.get , 
    post:axios.post ,
    delete:axios.delete ,
    put:axios.put
}

export default http;