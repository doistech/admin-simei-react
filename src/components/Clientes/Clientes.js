import Menu from "../Menu/Menu"
import React from "react";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
/*import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";*/
import './TabelaCliente.css'
import ApiCliente from "./ApiCliente";
import Footer from "../Menu/Footer";


function Clientes() {

 
    const[clientes, setClientes] = useState([]);

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
    

    return(
    <div>
    <Menu/>
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
       
      />
    </div>
  <Footer/>
    </div>
    )
}
export default Clientes;