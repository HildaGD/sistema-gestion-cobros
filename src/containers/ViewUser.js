import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './style.css'
import Navbar from '../components/Navbar'
import { useLocation } from "react-router-dom";

function ViewUser(props) {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const location = useLocation();

    useEffect(() => {
        handleChangeValues()

    });

    function handleChangeValues() {
        let em = props.location.state.email
        let pass = props.location.state.password
        console.log(props)
        setUserEmail(em)
        setUserPassword(pass)
    }


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="container-form" style={{ marginRight: '20%', marginTop: "10%" }}>
                    <Form >

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
                                //value={name}
                                //onChange={e => setName(e.target.value)}
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
                                //value={lastname}
                                //onChange={e=>setLastname(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese apellido
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control plaintext readOnly defaultValue={userPassword} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>

                            <Form.Control plaintext readOnly defaultValue={userEmail} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Identidad</Form.Label>
                            <Form.Control
                                type="identity"
                                placeholder="Identidad"
                                //value={identity}
                                //onChange={e => setIdentity(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese Identidad
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Zona</Form.Label>
                            <Form.Control
                                type="zone"
                                placeholder="Zona"
                                //value={zone}
                                // onChange={e => setZone(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese Zona
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                type="direction"
                                placeholder="Direccion"
                                // value={direction}
                                /// onChange={e => setDirection(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese al menos una direccion
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Telefono"
                                //value={phone}
                                // onChange={e => setPhone(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, ingrese al menos un telefono
                        </Form.Control.Feedback>
                        </Form.Group>



                    </Form>


                </div>


            </div>
        </div>

    );
}

export default ViewUser