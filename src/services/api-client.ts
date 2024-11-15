import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5869db14c06f4ebc9ebaef3d19d97aad",
    },
});
