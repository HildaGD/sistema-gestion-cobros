import React, { useEffect, useState } from "react";
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from '../store/actions/index';
import Select from 'react-select'

function EditUser() {
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
                        <Form.Group controlId="exampleForm.SelectCustom">
                         <Form.Label>Tipo Usuario</Form.Label>
                             <Form.Control as="select" custom>
                                <option>Jefe</option>
                                <option>Supervisor</option>
                                <option>Gestor</option>
                             </Form.Control>
                        </Form.Group>
      
                        <Form.Group controlId="formBasicName">
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
    
                        <Form.Group controlId="formBasicLastname">
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
    
                        <Form.Group controlId="formBasicRepeatPassword">
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
    
                        <Form.Group controlId="formBasicIdentity">
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
    
                        <Form.Group controlId="exampleForm.SelectCustom2">
                            <Form.Label>Agencia</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Agencia 1</option>
                                <option>Agencia 2</option>
                                <option>Agencia 3</option>
                            </Form.Control>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicDirection">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control 
                                type="direction" 
                                placeholder="Direccion" 
                                value={direction}
                                onChange={e => setDirection(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese al menos una direccion
                            </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control 
                                type="phone" 
                                placeholder="Telefono" 
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese al menos un telefono
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.SelectCustom2">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Activo</option>
                                <option>Inactivo</option>
                                <option>Bloqueado</option>
                                <option>Eliminado</option>
                            </Form.Control>
                        </Form.Group>
    
                        <Button variant="primary" type="submit">
                            Guardar Cambios
                        </Button>
    
                    </Form>
                    
            
                </div>
    
    
            </div>
        );
    }
      
       
export default EditUser