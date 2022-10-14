import Menu from "../Menu/Menu"
import TabelaClientes from "./TabelaClientes";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
/*import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";*/
import './TabelaCliente.css'
import ApiCliente from "./ApiCliente";









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
         
        },
        
        {
          dataField: "createdBy",
          text: "Phone",
          
        },
       
        {
          dataField: "email",
          text: "Dropdown",
          
        },
      ];



    return(
    <div>
    <Menu/>
    <div className="Tabela">
      <BootstrapTable
        keyField="id"
        data={clientes}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
      />
    </div>
    </div>
    )
}
export default Clientes;