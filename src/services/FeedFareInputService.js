import axios from 'axios'

const FARE_API_BASE_ENDPOINT = 'http://localhost:8080/api/v1'

class FeedFareInputService {

    uploadFareInput(){
        return axios.post(FARE_API_BASE_ENDPOINT/feedinput);
    }
}
export default new FeedFareInputService()