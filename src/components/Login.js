import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Card, CardHeader, CardBody, CardText, Button, Container, Table
} from 'reactstrap';
import Layout from './Layout'


const Login = () => {
    const [newUser, setNewUser] = useState({
        nombre: '',
        cuenta: 0
    });
    const [userId, setUserId] = useState("")

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'nombre':
                setNewUser({
                    ...newUser,
                    nombre: event.target.value
                });
                break;
            case 'cuenta':
                setNewUser({
                    ...newUser,
                    cuenta: event.target.value
                });
                break;
        }
    }
    const createUser = () => {
        if (newUser.nombre.length > 0 &&
            newUser.cuenta >= 0) {
            axios.post('https://equlibrium-pfinal.firebaseio.com/users.json', newUser)
                .then(({ data }) => {
                    setUserId(data.name)
                })
        } else {
            alert('No has llenado correctamente los campos')
        }
    }

    return (


        <Layout className='container'>
            <Container>
                <Card className="text-center m-4">
                    <CardHeader>Registro</CardHeader>
                    <CardBody className="row">
                        <>
                            <label htmlFor='nombre'>Nombre </label>
                            <input type='text' name='nombre' id='nombre' value={newUser.nombre} onChange={handleChange} />
                        </>
                        <CardText className="col">
                            <label>cuenta</label>
                            <input type='number' name='cuenta' id='cuenta' value={newUser.cuenta} onChange={handleChange} />
                        </CardText>
                        <Button onClick={createUser} color="danger"> Crear usuario</Button>
                    </CardBody>
                </Card>
            </Container>
            <Link to={"/home"}>
                <button className="btn btn-danger">Home</button>
            </Link>
        </Layout>



    );
}

export default Login;

