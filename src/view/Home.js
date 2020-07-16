import React,{useState,useEffect} from 'react';
//import {Link} from 'react-router-dom'
import axios from 'axios';
import {
    Card,CardHeader,CardBody,CardText,Button,Container,Table
} from 'reactstrap';
import NavbarE from "../components/NavbarE"

const Home = ({id}) =>{
    const [user,setUser] = useState({})
    const [oper,setOper] = useState([])
    const getUser=()=>{ 
        axios.get(`https://equlibrium-pfinal.firebaseio.com/users/${id}.json`)
        .then(({data})=> {
            setUser(data);
            const operationTmp = Object.values(data.operaciones);
            const operZise= operationTmp.length -3
            setOper(operationTmp.filter((x,index)=> index >= operZise).reverse())
        })}
    useEffect(()=>getUser(),[])

    return(
    <>
        <NavbarE></NavbarE>
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
                    {oper.length > 0 ? 
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
                            {oper.map((elemento,index)=>{
                                const color = elemento.tipo ? "text-success": "text-danger"
                                return (<tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{elemento.titulo}</td>
                                <td className={color}>${elemento.cantidad}</td>
                                <td>{elemento.fecha}</td>
                                </tr>
                            )})}
                        </tbody>
                    </Table> : <p>Fail</p>}
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
    </>
    )
};

export default Home