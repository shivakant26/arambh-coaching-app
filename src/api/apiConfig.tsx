import axios from "axios";

const Instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const Instance1 = axios.create({
    baseURL:"https://crud-574h.onrender.com/v1"
})


export default Instance;
