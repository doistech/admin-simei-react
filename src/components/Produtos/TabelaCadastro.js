import Menu from "../Menu/Menu"
import React from "react";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
/*import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";*/

import ApiCliente from "../Clientes/ApiCliente";
import Footer from "../Menu/Footer";
import {Table, Button, Form, Modal} from "react-bootstrap"


function Clientes() {

 
    const[clientes, setClientes] = useState([]);

  useEffect(() => {
    ApiCliente.get("/api/cliente/show?companyId=2&searchInput=bren").then(({data})=> {
    setClientes(data.clientes);
  })
  console.log(clientes)

  //eslin-disable-next-line- react-hooks/exhaustive-deps
}, []);
      

    return(
    <div>
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
                      <td><Button variant="primary" size="sm" onClick={() => this.carregarDados(cliente.id)}>Editar</Button>{' '}
                          <Button variant="danger" size="sm" onClick={() => this.excluirMusica(cliente.id)}>Excluir</Button></td>
                    </tr>
                )
               }
      </tbody>
    </Table>
    
    </div>
    )
}
export default Clientes;