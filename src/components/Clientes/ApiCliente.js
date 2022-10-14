import axios from "axios";

const ApiCliente = axios.create({
  baseURL: 'http://simeiapi.doistech.com.br'
});

export default ApiCliente;