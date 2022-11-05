import '../Produtos/teste.css'
import { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import TabelaCadastro from "./TabelaCadastro"
import SearchResults from './SearchResults';
import {Table, Button, Form, Modal} from "react-bootstrap"
import { render } from '@testing-library/react';

function SearchBar(){

const [clientes, setClientes] = useState([]);

function submit (){
  this.handleInputChange()
}

const handleInputChange = (e) =>{
    e.preventDefault();

    const {value} = e.target;
    if(!value) return;

    const url = `https://simeiapi.doistech.com.br/api/cliente/show?companyId=2&searchInput=${value}`;

    fetch(url)
    .then((response) => response.json())
    .then(({clientes})=> setClientes(clientes));

   
}




console.log("data", clientes);

    return(
        <div >
            <form>
                <button className='novoproduto'>NOVO PRODUTO </button>
                <input className='search-input' id='search' placeholder='Pesquisa de Produto'  onChange={handleInputChange}/>
                <button className='search-button'>PESQUISAR</button>
            </form>
            <div className='tabela'>
         
            <Table striped bordered hover>
         
         <thead className='topo-tabela'>
           <tr>
             <th>Nome</th>
             <th>Preço Varejo</th>
             <th>Preço Atacado</th>
           </tr>
         </thead>
         <tbody >
            
            
            
         {
                 
                   clientes.map((cliente) =>
                   
                   <tr className='dentro-tabela'>
                   <td>{cliente.name}</td>
                   <td>{cliente.id}</td>
                   <td>{cliente.id}</td>
                 </tr>
                   )
                  }
         </tbody>
       </Table>
            </div>
        </div>
    )
}export default SearchBar;