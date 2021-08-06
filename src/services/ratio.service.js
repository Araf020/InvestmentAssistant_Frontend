import axios from 'axios';
import authHeader from './auth-header';
import * as url from "url";

const API_URL = 'http://localhost:8080/api/test/f/';

class RatioService {


    getRatios() {
        return axios.get(API_URL + 'ratios', { headers: authHeader() });
    }
    getRatioByCodeName( ){
        return axios.get(API_URL + 'ratios/AAPL',{headers: authHeader()});
    }


}

export default new RatioService();
