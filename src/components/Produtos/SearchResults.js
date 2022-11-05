import TabelaCadastro from "./TabelaCadastro"
import '../Produtos/teste.css'
import {Table, Button, Form, Modal} from "react-bootstrap"

function SearchResults  ({clientes})  {

 




return(
    <div className="">
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
export default SearchResults