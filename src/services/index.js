import axios from 'axios';

// const BASE_ENDPOINT = 'http://localhost:8080/api/v1';
const BASE_ENDPOINT = 'http://localhost:8080/';

const ApiService = axios.create({
  baseURL: BASE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
    // Add other headers as needed
  }
});

const restApi = async (url, data) => {
    try {
        const resp = await ApiService.post(url, data);
        return resp.data;
    } catch (error) {
        console.log("error: ", error)
    }
}

export default restApi;

