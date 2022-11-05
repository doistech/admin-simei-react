import Menu from "../Menu/Menu"
import React from "react";
import { Button, Table } from "react-bootstrap"
import { useState, useEffect, useMemo } from "react";
import './TabelaCliente.css'
import Api from "../services/Api";
import Footer from "../Menu/Footer";
import TituloClientes from "./TituloClientes";
import { Link } from 'react-router-dom';
import axios from "axios";
import Pagination from '../Pagination';
import './TabelaCliente.css'
import '../Produtos/teste.css'
function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  //Método Get Clientes.
  useEffect(() => {
    Api.get("/api/cliente/show?companyId=2").then(({ data }) => {
      setClientes(data.clientes);
      setCurrentPage(1);
    })
    console.log(clientes)
    //eslin-disable-next-line- react-hooks/exhaustive-deps
  }, []);

  const setData = (data) => {
    let { id, name, createdBy, updatedBy, companyId, address } = data;
    localStorage.setItem('id', id);
    localStorage.setItem('company', companyId);
    localStorage.setItem('name', name);
    localStorage.setItem('createdBy', createdBy);
    localStorage.setItem('updatedBy', updatedBy);
    localStorage.setItem('address', address)
  }

  const getData = () => {
    axios.get(`http://simeiapi.doistech.com.br/api/cliente/show?companyId=2`)
      .then((getData) => {
        setClientes(getData.clientes);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      })
  }

  let PageSize = 7;


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return clientes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);







  return (
    <div>
      <Menu />
      <TituloClientes />
      <br></br>
      <form>
      <Link to='/CadastroClientes'><button className='novoproduto'>NOVO CLIENTE</button></Link>
                <input className='search-input' id='search' placeholder='Pesquisa de Produto'  /*onChange={handleInputChange}*//>
                <button className='search-button'>PESQUISAR</button>
            </form>
      <div className="Tabela">
        <Table striped bordered hover>
          <thead id="thead">
            <tr>
              <th>Id</th>
              <th>CompanyId</th>
              <th>Name</th>
              <th>createdBy</th>
              <th>updatedBy</th>
              <th>sadress</th>
              <th>opções</th>
            </tr>
          </thead>
          <tbody>
            {

              currentTableData.map(cliente => {
                return (
                  <tr>
                    <td>{cliente.id}</td>
                    <td>{cliente.companyId}</td>
                    <td>{cliente.name}</td>
                    <td>{cliente.createdBy}</td>
                    <td>{cliente.updatedBy}</td>
                    <td>{cliente.adress}</td>
                    <td><Link to='/EditarCliente'><Button id="Button" variant="link" onClick={() => setData(cliente)}>Editar</Button></Link>{' '}
                      <Button variant="link" id="Button"  onClick={() => onDelete(cliente.id)}>Excluir</Button></td>
                  </tr>);
              })
            }
          </tbody>
        </Table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={clientes.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </div>
  )




}
export default Clientes;









