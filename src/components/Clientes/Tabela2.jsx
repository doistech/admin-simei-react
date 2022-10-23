import Menu from "../Menu/Menu"
import React from "react";
import {Button, Table, Form} from "react-bootstrap"
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
/*import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";*/
import './TabelaCliente.css'
import ApiCliente from "./ApiCliente";
import Footer from "../Menu/Footer";
import TituloClientes from "./TituloClientes";
import FormCliente from "./FormCliente";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import EditarCliente from "./EditarCliente";
import axios from "axios";


function Clientes() {
  const[clientes, setClientes] = useState([]);

  //Método Get Clientes.
  useEffect(() => {
    ApiCliente.get("/api/cliente/show?companyId=2").then(({data})=> {
    setClientes(data.clientes);
  })
  console.log(clientes)
  //eslin-disable-next-line- react-hooks/exhaustive-deps
}, []);

const setData = (data) => {
  let { id, name, createdBy, updatedBy } = data;
  localStorage.setItem('id', id);
  localStorage.setItem('name', name);
  localStorage.setItem('createdBy',  createdBy);
  localStorage.setItem('updatedBy', updatedBy)
}

const getData = () => {
  axios.get(`http://simeiapi.doistech.com.br/api/cliente/show?companyId=2`)
      .then((getData) => {
          setClientes(getData.data);
      })
}

const onDelete = (id) => {
  axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
  .then(() => {
      getData();
  })
}





 
return (
  <div>
    <Menu/>
    <TituloClientes/>
    <br></br>
    <Link to='/CadastroClientes'><Button>aDICIONAR NOVO CLIENTE</Button></Link>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {
                clientes.map((cliente) =>
                    <tr>
                      <td>{cliente.id}</td>
                      <td>{cliente.name}</td>
                      <td>{cliente.createdBy}</td>
                      <td>{cliente.updatedBy}</td>
                      <td><Link to='/EditarCliente'><Button onClick={() => setData(cliente)}>Editar</Button></Link>{' '}
                          <Button variant="danger" size="sm" onClick={() => onDelete(cliente.id)}>Excluir</Button></td>
                    </tr>
                )
               }
      </tbody>

    </Table>
    </div>
  )


   
   
}
export default Clientes;








  
