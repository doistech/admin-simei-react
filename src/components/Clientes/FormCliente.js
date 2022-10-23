import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function FormClientes() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
    


        const postData = () => {
            axios.post(`http://simeiapi.doistech.com.br/api/cliente`, {
            id: 0,
            name,
            email
        })
        }


        return (
            <div>
                <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            </div>
        )
    }