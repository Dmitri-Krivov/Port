import React, {useEffect, useState} from "react";
import { Container, Row, Col, ListGroup, Card} from 'react-bootstrap'

function Catalog (){
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        fetch('/catalog')
        .then(res => res.json())
        .then(data => setCatalog(data))
    }, [])
    return ( 
        <Container className="py-4">
        <Row>
          <Col xs={3} md={2}>
               <ListGroup variant="flush">
                    <ListGroup.Item>Home</ListGroup.Item>
                    <ListGroup.Item>Dress</ListGroup.Item>
                    <ListGroup.Item>Shoes</ListGroup.Item>
                    <ListGroup.Item>Accessories</ListGroup.Item>
                </ListGroup>
          </Col>
          <Col xs={9} md={10}>
             <Row>
                {catalog.map((item, i, arr)=>{
                    return(
                        <Col sm={10} md={6}  lg={4} xl={4}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={item.image} className="product-img"/>
                                <Card.Body className="product-card-body">
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text className="d-flex justify-content-between align-items-center">
                                    <span>Prise: </span>
                                    <span>{item.prise} $</span>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
             </Row>
          </Col>
        </Row>
      </Container>
     );
}
 
export default Catalog;