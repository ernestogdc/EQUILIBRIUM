import React from 'react';
import {
    Card,CardHeader,CardBody,CardText,Button,Container
} from 'reactstrap';

const Home = () =>{
    const user = "Daniel"
    const cuenta = 500000

    return(
    <Container>
        <h1 className="text-primary text-center mt-5">Hola {user}</h1>
        <Card className="text-center m-5"> 
            <CardHeader>Balance general</CardHeader> 
            <CardBody>
                <CardText>Total en cuenta: ${cuenta}</CardText>
            </CardBody>
        </Card>
        <Card className="text-center m-5"> 
            <CardHeader>Historial de operaciones</CardHeader> 
            <CardBody>

            </CardBody>
        </Card>
        <Card className="text-center m-5"> 
            <CardHeader>Registrar nueva operación</CardHeader> 
            <CardBody>
                <Button className="mr-2">INGRESO</Button>
                <Button color="danger" className="ml-2">GASTO</Button>
            </CardBody>
        </Card>
    </Container>
    )
};

export default Home;