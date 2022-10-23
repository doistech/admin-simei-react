import React from "react"
import {Table, Button, Form, Modal} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';




class Playlist extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            id: 0,
            name : "",
            createdBy: "",
            updatedBy: "",
            clientes : [],
            modalAberto: false
        }
     }

     /*componentDidMount(){
      this.buscarMusica();
     }*/

     buscarMusica= () =>{
        fetch("http://simeiapi.doistech.com.br/api/cliente/show?companyId=2", {method: 'GET'})
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({clientes : dados})
        })
     }

     excluirMusica = (id) => {
        fetch("http://simeiapi.doistech.com.br/api/cliente/show?companyId=2/" + id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
            this.buscarMusica();
            }
        })
     }

     carregarDados = (id) =>{
        fetch("http://simeiapi.doistech.com.br/api/cliente/show?companyId=2/" + id, {method: 'GET'})
        .then(resposta => resposta.json())
        .then(cliente => {
            this.setState({
                id: cliente.id,
                updatedBy: cliente.updatedBy,
                createdBy: cliente.createdBy,
                name: cliente.name

            })
            this.abrirModal();
        })
     }

     adicionaMusica = (clientes) => {
        fetch("http://simeiapi.doistech.com.br/api/cliente",      
        {method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(clientes)
          })
     .then(resposta => {
        if(resposta.ok){
            this.buscarMusica();
        }else{
            alert('Não foi possivel adicionar a musica');
        }
     })
    } 

     editarMusica = (clientes) => {
        fetch("http://simeiapi.doistech.com.br/api/cliente/" + clientes.id,  
        {method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(clientes)
          })
     .then(resposta => {
        if(resposta.ok){
            this.buscarMusica();
        }else{
            alert('Não foi possivel editar os dados da musica');
        }
     })
     }
 

    renderTabela(){
        return(    
        <div >
        <Table striped bordered hover>
            <thead id="tabela">
                <tr>
                    <th>id</th>
                    <th>Faixa</th>
                    <th>Autor</th>
                    <th>Album</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>

              {
                this.state.clientes.map((cliente) =>
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
        </Table></div>
        )
        }

  /* Metodos form - Inicio */
        atualizaFaixa = (e) => {
            this.setState(
                {name: e.target.value}
            )
           }

           atualizaAutor = (e) => {
            this.setState(
                {createdBy: e.target.value}
            )
           }
           atualizaAlbum = (e) => {
            this.setState(
                {updatedBy: e.target.value}
            )
           }   

           submit = () =>{

        if(this.state.id === 0){
            const cliente = {
                id: 0,
                name: this.state.name,
                createdBy: this.state.createdBy,
               updatedBy: this.state.updatedBy,
            }
            this.adicionaMusica(cliente);
        }else{
            const cliente = {
                id: this.state.id,
                name: this.state.name,
                createdBy: this.state.createdBy,
                updatedBy: this.state.updatedBy,
            }
            this.editarMusica(cliente);
        }

            this.fecharModal();
    }

        novo = () =>{
            this.setState(
                {
                    id: 0,
                    name: "",
                    createdBy: "",
                    updatedBy: ""            
                }
            )
            this.abrirModal();
        }

        fecharModal= () =>{
            this.setState(
                {
                    modalAberto : false
                }
            )
        }

        abrirModal= () =>{
            this.setState(
                {
                    modalAberto : true
                }
            )
        }
            
  /* Metodos form - Fim */





        render(){
            return (
        <div>
      <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          <Form>
             <Form.Group className="mb-3">
           <Form.Label>ID</Form.Label>
           <Form.Control type="text" value={this.state.id} readOnly={true} />
        </Form.Group>
        <Form.Group className="mb-3">
           <Form.Label>Faixa</Form.Label>
           <Form.Control type="text" placeholder="Digite o nome da musica" value={this.state.name} onChange={this.atualizaFaixa} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Autor</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome do autor"  value={this.state.createdBy} onChange={this.atualizaAutor}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Album</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome do album" value={this.state.updatedBy} onChange={this.atualizaAlbum} />
        </Form.Group>
           </Form>
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={this.fecharModal}>
            Fechar
          </Button>
          <Button variant="success" size="sm" type="submit" onClick={this.submit}>
             Salvar
           </Button>
        </Modal.Footer>
      </Modal>
      <div>
      <Button variant="primary" size="sm" onClick={this.novo}>
        Adicionar uma nova musica
      </Button>
    </div>

        {this.renderTabela()}
         </div>
         )
        } 
        
    }
    

export default Playlist;