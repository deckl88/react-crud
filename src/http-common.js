import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    },

});
/* 192.168.1.148:8080 */