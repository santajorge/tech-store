import React from 'react';
import ProductCard from './Item';
import { useEffect } from 'react';
import { getProducts } from '../helpers/getProducts';
import {Container, Row} from 'react-bootstrap';


const ItemList = () => {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {

       getProducts(setProducts);

    }, [])

    return (
        <Container fluid>   
            <Row className="justify-content-center">
            {
                products.length ? 

                (
                    products.map(product => {
                        return(
                                <ProductCard key={product.id} product={product}/>
                        )

                    })
                )
                    
                : <h1>Cargando...</h1>

            }
            </Row>
        </Container>
    )

}

export default ItemList;