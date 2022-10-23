import Menu from "../Menu/Menu"
import React from "react";
import {Button, Modal} from "react-bootstrap"
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



      const columns = [
       
        {
          dataField: "name",
          text: "Name",
          headerStyle: {
            backgroundColor: '#0081c2',
            color: 'white',
          }
         
        },
        
        {
          dataField: "createdBy",
          text: "Phone",
          headerStyle: {
            backgroundColor: '#0081c2',
            color: 'white',
          }
        },
       
        {
          dataField: "email",
          text: "Dropdown",
          headerStyle: {
            backgroundColor: '#0081c2',
            color: 'white',
          }
        },

        
      ];


      
    const rowStyle = { backgroundColor: 'White' };
    const expandRow = {
      renderer: row => (
        <div>            
          <p><Button variant="primary" size="sm">Editar</Button>{' '}
          <Button variant="danger" size="sm">Excluir</Button></p>
        </div>
      )
    };

    return(
    <div>
    <Menu/>
    <TituloClientes/>
    <FormCliente/>
    <div className="Tabela">
      <BootstrapTable
        keyField="id"
        data={clientes}
        columns={columns}
        rowStyle={ rowStyle } 
        striped
        hover
        condensed
        pagination={paginationFactory()}
        expandRow={ expandRow }
      />
    </div>
  <Footer/>
    </div>
    )
}
export default Clientes;