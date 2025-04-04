import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://laravel-12-api.test',
})

export default Api