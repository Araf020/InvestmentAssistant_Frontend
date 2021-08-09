import axios from 'axios';
import authHeader from './auth-header';
import * as url from "url";

const API_URL = 'http://localhost:8080/api/';

class SectorService {



    getSectors(){
        return axios.get(API_URL + 'all_sectors',{headers: authHeader()});
    }


}

export default new SectorService();
