import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import Menu from '../Menu/Menu';
import TituloClientes from './TituloClientes';
import Api from '../services/Api';
import { Link } from 'react-router-dom';

export default function CadastroClientes() {
  
  const [id] = useState(null);
  const [company] = useState({id: 2});
  const [name, setName] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');


  const postData = () => {
    const cliente = {
      id,
      company,
      name,
      createdBy,
      updatedBy
    }
    Api.post('/api/cliente', cliente);
  }

  return (
    <div>
      <Menu />
      <TituloClientes />
      <br></br>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type="text" placeholder="CreatedBy" value={createdBy} onChange={e => setCreatedBy(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type="text" placeholder="UpdatedBy" value={updatedBy} onChange={e => setUpdatedBy(e.target.value)} />
        </Form.Group>
        <Link to='/Clientes'><Button onClick={postData} type='submit'>Submit</Button></Link>
      </Form>
    </div>
  )
}