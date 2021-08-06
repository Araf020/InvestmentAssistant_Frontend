import axios from 'axios';
import authHeader from './auth-header';
import * as url from "url";

const API_URL = 'http://localhost:8080/api/';

class GrowthService {



    getGrowthsByCodeName(){
        return axios.get(API_URL + 'growths/AAPL',{headers: authHeader()});
    }


}

export default new GrowthService();
