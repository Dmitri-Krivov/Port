import React, {useEffect, useState} from "react";
import { Container, Row, Col, ListGroup, Card, Button} from 'react-bootstrap'

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
          <Col xs={3}>
               <ListGroup variant="flush">
                    <ListGroup.Item>T-short</ListGroup.Item>
                    <ListGroup.Item>Sweater</ListGroup.Item>
                    <ListGroup.Item>Shoes</ListGroup.Item>
                    <ListGroup.Item>Accessories</ListGroup.Item>
                </ListGroup>
          </Col>
          <Col xs={9}>
             <Row>
                
                {catalog.map((item, i, arr)=>{
                    return(
                        <Col xs={4}>
                            <Card className="mb-3">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                               
                                <Card.Text className="d-flex justify-content-between align-items-center">
                                    <span>Prise: </span>
                                    <span>{item.prise}</span>
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