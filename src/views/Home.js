import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {
    Card, CardHeader, CardBody, CardText, Button, Container, Table
} from 'reactstrap';
import Layout from "../components/Layout"

const Home = () => {
    const [user, setUser] = useState({})
    const [oper, setOper] = useState(null)

    useEffect(() => {
        axios.get(`https://equlibrium-pfinal.firebaseio.com/users/${window.sessionStorage.getItem('id')}.json`)
            .then(({ data }) => {
                setUser(data);
                if(data.operaciones === undefined ){
                    setOper(null)
                }else{
                    const operationTmp = Object.values(data.operaciones);
                    const operZise = operationTmp.length - 3;
                    setOper(operationTmp.filter((x, index) => index >= operZise).reverse())
                }
            })
    }, [])

    return (
        <Layout>
            <Container className="mt-4">
                <h1 className="text-primary text-center mt-3"><b>Hola {user.nombre}</b></h1>
                <Card className="text-center m-3">
                    <CardHeader>Balance general</CardHeader>
                    <CardBody>
                        <CardText>Total en cuenta: {"$" + user.cuenta}</CardText>
                    </CardBody>
                </Card>
                <Card className="text-center m-3">
                    <CardHeader>Historial de operaciones</CardHeader>
                    <CardBody>
                    {oper === null ? <p>No hay operaciones</p> :
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{ borderTop: "none" }}>#</th>
                                    <th style={{ borderTop: "none" }}>Titulo</th>
                                    <th style={{ borderTop: "none" }}>Cantidad</th>
                                    <th style={{ borderTop: "none" }}>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oper.map((elemento, index) => {
                                    const color = elemento.tipo ? "text-success" : "text-danger"
                                    return (<tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{elemento.titulo}</td>
                                        <td className={color}>${elemento.cantidad}</td>
                                        <td>{elemento.fecha}</td>
                                        </tr>
                                        )
                                    }
                                )}
                                </tbody>
                        </Table>}
                        <Link to="/history">
                            <Button>Ver Historial completo</Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="text-center m-3">
                    <CardHeader>Registrar nueva operación</CardHeader>
                    <CardBody>
                        <Link to="/Newopp/a/i">
                            <Button className="mr-2">INGRESO</Button>
                        </Link>
                        <Link to="/Newopp/a/g">
                            <Button color="danger" className="ml-2">GASTO</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Container>
        </Layout>

    )
};

export default Home