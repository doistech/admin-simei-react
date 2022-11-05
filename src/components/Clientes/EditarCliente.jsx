import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import Api from "../services/Api";
import Menu from '../Menu/Menu';
import TituloClientes from './TituloClientes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function EditarCliente() {
  const [id, setId] = useState(null);
  const [company, setCompany] = useState({ id: 0 });
  const [name, setName] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');
  const [address, setAddress] = useState('');




  useEffect(() => {
    setId(localStorage.getItem('id'))
    setCompany(localStorage.getItem('company'));
    setName(localStorage.getItem('name'));
    setCreatedBy(localStorage.getItem('createdBy'));
    setUpdatedBy(localStorage.getItem('updatedBy'));
    setAddress(localStorage.getItem('address'))
  }, []);

  const updateAPIData = () => {
    Api.post(`/api/cliente`, {
      id,
      company,
      name,
      createdBy,
      updatedBy,
      address
    })
  }
  return (
    <div>
      <Menu />
      <TituloClientes />
      <br></br>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type="text" placeholder="name" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type="text" placeholder="name" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Link to='/Clientes'><Button type='submit' onClick={updateAPIData}>Submit</Button></Link>
      </Form>
    </div>
  )
}