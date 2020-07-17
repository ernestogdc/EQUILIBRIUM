import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const Newopp = () => {
    const [newOpp, setNewOpp] = useState({
        titulo: '',
        cantidad: 0,
        fecha: '',
        tipo: true
    });
    const [idSession, setIdSession] = useState(window.sessionStorage.getItem('id'));


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
                alert('Algo hiciste mal tontuelo')
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

    return (
        <Layout >
            <lavel htmlFor='titulo'>Ingresa el titulo de la operacion</lavel>
            <input id='titulo' type='text' value={newOpp.nombre} onChange={handleChange} ></input>
            <lavel htmlFor='cantidad'>Cantidad de la operacion</lavel>
            <input id='cantidad' type='number' value={newOpp.cantidad} onChange={handleChange} ></input>
            <lavel htmlFor='fecha' >Fecha de la operacion</lavel>
            <input id='fecha' type='date' value={newOpp.fecha} onChange={handleChange} ></input>
            <lavel htmlFor='tipo' >Ingreso?</lavel>
            <input type='checkbox' ></input>
            <button onClick={createOpp} type='submit'>Crear Registro</button>
        </Layout>
    );
}

export default Newopp;