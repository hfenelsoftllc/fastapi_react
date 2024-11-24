import axios from 'axios';


const api = axios.create({
    basrUrl: "http://localhost:8000"
});


export default api;