import axios from "axios";

export const api =axios.create({
    headers:{
        "content-Type":"application/json"
    }
})