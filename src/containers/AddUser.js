import React, { useEffect, useState } from "react";
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from '../store/actions/index';
//import Select from 'react-select'

function AddUser() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatpassword, setRepeatpassword] = useState('')
    const [identity, setIdentity] = useState('')
    const [agency, setAgency] = useState('')
    const [direction, setDirection] = useState('')
    const [phone, setPhone] = useState('')
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
        console.log(name)

    });

 
    return (
        <div className="container">
            <div className="container-form" style={{ marginRight: '20%', marginTop: "15%" }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
            
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Tipo Usuario</Form.Label>
                        <select>
                        <option value="jefe">Jefe</option>
                        <option value="supervisor">Supervisor</option>
                        <option selected value="gestor">Gestor</option>
                        </select>      
                    </Form.Group>    

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="Ingrese Nombre" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese nombre
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                            type="lastname" 
                            placeholder="Ingrese Apellido" 
                            value={lastname}
                            onChange={e=>setLastname(e.target.value)}
                            required 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese apellido
                        </Form.Control.Feedback>
                    </Form.Group>  

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

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repetir Contraseña</Form.Label>
                        <Form.Control 
                            type="repeatpassword" 
                            placeholder="Confirme Contraseña" 
                            value={repeatpassword}
                            onChange={e=>setRepeatpassword(e.target.value)}
                            required 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, confirme contraseña
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Identidad</Form.Label>
                        <Form.Control 
                            type="identity" 
                            placeholder="Identidad" 
                            value={identity}
                            onChange={e => setIdentity(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese Identidad
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Agencia</Form.Label>
                        <Form.Control 
                            type="agency" 
                            placeholder="Agencia" 
                            value={agency}
                            onChange={e => setAgency(e.target.value)}
                            required
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control 
                            type="direction" 
                            placeholder="Direccion" 
                            value={direction}
                            onChange={e => setDirection(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese direccion
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                            type="phone" 
                            placeholder="Telefono" 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese telefono
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>

                </Form>
                
        
            </div>


        </div>
    );
}
  
       
export default AddUser