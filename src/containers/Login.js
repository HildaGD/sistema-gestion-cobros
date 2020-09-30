import React, { useEffect, useState } from "react";
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from '../store/actions/index';
import conexion from '../services/index'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    useEffect(() => {
        handleValidatedForm()

    });

    async function  handleValidatedForm(){
        const login = await conexion(email, password)
        console.log(login)

    }

    return (
        <div className="container">
            <div className="container-form" style={{ marginRight: '20%', marginTop: "15%" }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Correo Electrónico" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese correo electrónico
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Contraseña" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            required 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese contraseña
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Iniciar Sesión
                    </Button>
                </Form>
            </div>


        </div>
    );
}

export default Login