
import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button, Image} from 'react-bootstrap';


function ProductCard ({product}) {
    return(
        <Card border="secondary" className="text-center mt-5 p-2" style={{ width: '18rem'}}>
            <Image style={{ height: '18rem'}} className='fluid' src={product.image} />
            <Card.Body>
                <Card.Title>{product.name} </Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="dark">Añadir al carrito</Button>
            </Card.Body>
            <Card.Footer>
                <Link to={`/product/${product.id}`}>
                    <Button variant="outline-secondary" size="sm">Ver más</Button>
                </Link>
            </Card.Footer>
        </Card>      
    );
}

export default ProductCard;
    

