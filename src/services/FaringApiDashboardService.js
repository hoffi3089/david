import axios from 'axios';

const BFM_FAREAPI_BASE_ENDPOINT = 'http://localhost:8080/api/v1'; // Replace with your Spring Boot API base URL

const ApiService = axios.create({
  baseURL: BFM_FAREAPI_BASE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
    // Add other headers as needed
  }
});

export default {
  async healthCheck() {
    try {
      const response = await ApiService.get('/healthcheck');
      return response.data;
    } catch (error) {
      console.error('Error fetching health check:', error);
      throw error;
    }
  }
};
