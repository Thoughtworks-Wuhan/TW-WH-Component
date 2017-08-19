import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:8080/';
const service = {
    getItems: () => axios.get(`${SERVER_ADDRESS}api/items`).then((result) => {
        if (result.status === 200) {
            return result.data;
        }
        throw result;
    }).catch((error) => {
        throw error;
    })
};
export default service;