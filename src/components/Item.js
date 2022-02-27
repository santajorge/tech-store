import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Product ({product: {name, price, image, detail}}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name} ${price}</Card.Title>
                <Card.Text>{detail}</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>      
    );
}

export default Product;
    

