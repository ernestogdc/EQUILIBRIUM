import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Layout from './Layout';
import Home from '../views/Home';


const Login = () => {
    const [newUser, setNewUser] = useState({
        nombre: '',
        cuenta: 0
    });
    const [userId, setUserId] = useState()

    window.sessionStorage.setItem('id', userId)





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
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' name='nombre' id='nombre' value={newUser.nombre} onChange={handleChange} />
            <label>cuenta</label>
            <input type='number' name='cuenta' id='cuenta' value={newUser.cuenta} onChange={handleChange} />
            <button onClick={createUser}> Crear usuario</button>
            <Link to="/history">
                <button className="btn btn-danger">Home</button>
            </Link>




        </Layout>



    );
}

export default Login;

