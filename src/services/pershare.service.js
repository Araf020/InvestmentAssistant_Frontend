import axios from 'axios';
import authHeader from './auth-header';
import * as url from "url";

const API_URL = 'http://localhost:8080/api/';

class PerShareService {



    getTopCompanyByEPS(){
        return axios.get(API_URL + 'pershares/top_company_by_eps',{headers: authHeader()});
    }


}

export default new PerShareService();
