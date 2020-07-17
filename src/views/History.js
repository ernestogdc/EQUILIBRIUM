import React, { useState, useEffect } from 'react';
import Operation from '../components/Operation';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../components/Layout'

// "nombre":"Daniel",
//     "cuenta":500000000,
//     "operacion":{
//         "titulo":"Compra de leche",
//         "cantidad":35,
//         "tipo": true ,
//         "fecha": "13-julio-2020"


const History = () => {
    const [operation, setOpp] = useState({});
    const [error, setError] = useState(null);
    const [idSession, setIdSession] = useState(window.sessionStorage.getItem('id'));


    useEffect(() => {
        getOpp();
    }, [operation])

    const getOpp = () => {
        axios.get(`https://equlibrium-pfinal.firebaseio.com/users/${idSession}.json`)
            .then(({ data, status }) => {
                if (data !== null) {
                    setOpp(data.operaciones);
                } else {
                    setError('No existe ')
                }
            });

    }

    const showOpps = () => {
        return (operation == null ? 'No Existe ninguna operacion' :
            Object.keys(operation).map(opp => <Operation
                key={opp}
                id={opp}
                title={operation[opp].titulo}
                amount={operation[opp].cantidad}
                type={operation[opp].tipo}
                date={operation[opp].fecha}

            />)
        )

    }


    return (
        <Layout>

            {showOpps()}

        </Layout>
    );
}

export default History;