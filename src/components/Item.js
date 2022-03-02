import React from 'react';
import {Card, Button} from 'react-bootstrap';

function ProductCard ({product}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name} ${product.price}</Card.Title>
                <Card.Text>{product.detail}</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>      
    );
}

export default ProductCard;
    

