import React, { useState } from 'react'
import {Button, Form} from "react-bootstrap"
import ApiCliente from "./ApiCliente";
import Menu from '../Menu/Menu';
import TituloClientes from './TituloClientes';
import axios from 'axios';

export default function EditarCliente() {
  const [name, setName] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [updatedBy, setUpdatedBy] = useState('');
    
    const postData = () => {
        axios.post('http://simeiapi.doistech.com.br/api/cliente', {
            name,
            createdBy,
            updatedBy
        })
    }

    return (
        <div>
           <Menu/>
    <TituloClientes/>
    <br></br>
                  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={e=> setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={e=> setCreatedBy(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={e=> setUpdatedBy(e.target.value)} />
      </Form.Group>
      <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
        </div>
    )
}