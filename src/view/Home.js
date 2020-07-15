import React,{useState,useEffect} from 'react';
//import {Link} from 'react-router-dom'
import axios from 'axios';
import {
    Card,CardHeader,CardBody,CardText,Button,Container,Table
} from 'reactstrap';

const Home = ({id}) =>{
    const [user,setUser] = useState({})
    const [oper,setOper] = useState([{},{},{}])
    const getUser=()=>{ 
        axios.get(`https://equlibrium-pfinal.firebaseio.com/users/${id}.json`)
        .then(({data})=> {
            setUser(data)
            setOper(Object.values(data.operaciones))
        })}

    useEffect(()=>getUser(),[])

    return(
    <Container style={{backgroundColor:""}}>
        <h1 className="text-primary text-center mt-5"><b>Hola {user.nombre}</b></h1>
        <Card className="text-center m-4"> 
            <CardHeader>Balance general</CardHeader> 
            <CardBody>
                <CardText>Total en cuenta: ${user.cuenta}</CardText>
            </CardBody>
        </Card>
        <Card className="text-center m-4"> 
            <CardHeader>Historial de operaciones</CardHeader> 
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                        <th style={{borderTop:"none"}}>#</th>
                        <th style={{borderTop:"none"}}>Titulo</th>
                        <th style={{borderTop:"none"}}>Cantidad</th>
                        <th style={{borderTop:"none"}}>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>{oper[oper.length-1].titulo}</td>
                        <td>{oper[oper.length-1].cantidad}</td>
                        <td>{oper[oper.length-1].fecha}</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>{oper[oper.length-2].titulo}</td>
                        <td>{oper[oper.length-2].cantidad}</td>
                        <td>{oper[oper.length-2].fecha}</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>{oper[oper.length-3].titulo}</td>
                        <td>{oper[oper.length-3].cantidad}</td>
                        <td>{oper[oper.length-3].fecha}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button>Ver Historial completo</Button>
            </CardBody>
        </Card>
        <Card className="text-center m-4"> 
            <CardHeader>Registrar nueva operación</CardHeader> 
            <CardBody>
                {/*<Link to="/ingreso">*/}
                    <Button className="mr-2">INGRESO</Button>
                {/* </Link> */}
                {/* <Link to="/gasto"> */}
                    <Button color="danger" className="ml-2">GASTO</Button>
                {/* </Link> */}
            </CardBody>
        </Card>
    </Container>
    )
};

export default Home