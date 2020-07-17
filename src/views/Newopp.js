import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import {
    Button, Container, CardBody, Card, CardHeader
} from 'reactstrap'

const Newopp = () => {
    const [idSession] = useState(window.sessionStorage.getItem('id'));
    const {op,tipo} = useParams()
    const [newOpp, setNewOpp] = useState({
        titulo: '',
        cantidad: 0,
        fecha: '',
        tipo: ''    
    });


    const handleChange = (event) => {
        switch (event.target.id) {
            case 'titulo':
                setNewOpp({
                    ...newOpp,
                    titulo: event.target.value
                });
                break;
            case 'cantidad':
                setNewOpp({
                    ...newOpp,
                    cantidad: parseInt(event.target.value)
                });
                break;
            case 'fecha':
                setNewOpp({
                    ...newOpp,
                    fecha: event.target.value
                });
                break;
            default:
                alert('Algo hiciste mal, tontuelo')
                break;

        }
    }

    const createOpp = () => {
        if (newOpp.titulo.length > 0 &&
            newOpp.cantidad > 0) {
            axios.post(`https://equlibrium-pfinal.firebaseio.com/users/${idSession}/operaciones.json`, newOpp)
                .then(({ data }) => {
                    window.sessionStorage.setItem('idOpp', data.name)
                    return data
                })
        } else {
            alert('no llenaste los campos')
        }
    }

    const editOpp = () => {
        if (newOpp.titulo.length > 0 &&
            newOpp.cantidad > 0) {
            axios.patch(`https://equlibrium-pfinal.firebaseio.com/users/${idSession}/operaciones.json`, newOpp)
                .then(({ data }) => {
                    window.sessionStorage.setItem('idOpp', data.name)
                    return data
                })
        } else {
            alert('no llenaste los campos')
        }
    }

    return (
        <Layout >
            <Container className="justify-content-center">
                <Card style={{borderColor: "#51C8CF", marginTop: "5%"}}>
                    <CardHeader className="d-inline-flex" style={{borderColor: "#51C8CF"}}>
                        <h1 className="text-center">
                            {op==="a"? "Nueva operacion" : "Editar operacion"}
                        </h1>
                    </CardHeader>
                    <CardBody>
                        <label className="mr-2" htmlFor='titulo'>Titulo de la operacion</label>
                        <input id='titulo' type='text' value={newOpp.nombre} onChange={handleChange} ></input>
                    </CardBody>
                    <CardBody>
                        <label className="mr-2" htmlFor='cantidad'>Cantidad de la operacion</label>
                        <input id='cantidad' type='number' value={newOpp.cantidad} onChange={handleChange} ></input>
                    </CardBody>
                    <CardBody className="d-inline-flex">
                        <label className="mr-2" htmlFor='fecha' >Fecha de la operacion</label>
                        <input id='fecha' type='date' value={newOpp.fecha} onChange={handleChange} ></input>
                    </CardBody>
                    <CardBody>
                        <span className="ml-5">
                            <label className="mr-3" htmlFor='tipo' >Ingreso</label>
                            <input type='radio' name="tipo" value={newOpp.tipo}></input>
                        </span>
                        <span className="ml-5">
                            <label className="mr-3" htmlFor='tipo' >Gasto</label>
                            <input type='radio' name="tipo" value={newOpp.tipo}></input>
                        </span>
                    </CardBody>
                    <Button style={{backgroundColor: "#4D9DA8",borderColor: "#4D9DA8"}} onClick={op === "a" ? createOpp : editOpp } type='submit'>Crear Registro</Button>
                </Card>
            </Container>
        </Layout>
    );
}

export default Newopp;