import axios from "axios";

const Api = axios.create({
  baseURL: 'http://simeiapi.doistech.com.br'
});

export default Api;