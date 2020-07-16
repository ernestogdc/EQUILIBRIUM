import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { UncontrolledCollapse, ButtonToggle, CardBody, Card } from 'reactstrap';




const Operation = ({ id, title, amount, type, date }) => {
    const history = useHistory();

    const deleteOpp = () => {
        axios.delete(`https://equlibrium-pfinal.firebaseio.com/users/-MCJtARTmPMVGnjDa8bB/operaciones/${id}.json`)
            .then(() => {
                history.push("/history");
            })
            .catch(({ response }) => {
                alert(response);
                history.push("/");
            })
    }

    return (
        <div className='container'>
            <div color="primary" id={`${id}`} style={{ marginBottom: '1rem' }}>
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
        </div>
    );
}

export default Operation;