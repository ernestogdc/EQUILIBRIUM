import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { UncontrolledCollapse, ButtonToggle, CardBody, Card, CardHeader, Container } from 'reactstrap';




const Operation = ({ id, title, amount, type, date }) => {
    const history = useHistory();
    const [idSession] = useState(window.sessionStorage.getItem('id'));
    const [idOperation, setIdOpp] = useState(window.sessionStorage.getItem('idOpp'));


    useEffect(() => {
        console.log(idSession)
        console.log(idOperation)

    }, [idSession, idOperation])

    const deleteOpp = () => {
        axios.delete(`https://equlibrium-pfinal.firebaseio.com/users/${idSession}/operaciones/${id}.json`)
            .then(() => {
                history.push("/history");
            })
            .catch(({ response }) => {
                alert(response);
                history.push("/");
            })
    }
    return (
        <Container >
            <Card className="m-3">
                <div id={`${id}`} className="p-3">
                    <h3>{title}</h3>

                    <p>Fecha:{date} </p>
                </div>
                <UncontrolledCollapse toggler={`${id}`}>
                    <Card>
                        <CardBody>
                            <p>Cantidad:{amount} </p>
                            <div>Tipo de operacion: {type ? `Ingreso` : `Gasto`}</div>
                            <ButtonToggle color="success">Editar</ButtonToggle>
                            <ButtonToggle onClick={deleteOpp} color="danger">Eliminar</ButtonToggle>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </Card>
        </Container>
    );
}

export default Operation;