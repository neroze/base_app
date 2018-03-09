import { Model } from 'sarala';
import axios from 'axios';

export default class BaseModel extends Model
{
    baseUrl () {
        return 'http://localhost:4000';
    }

    request (config) {
        return axios.request({});
    }
}