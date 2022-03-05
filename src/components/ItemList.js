import React from 'react';
import ProductCard from './Item';
import { useEffect } from 'react';
import { getProducts } from '../helpers/getProducts';
import {CardGroup, Container} from 'react-bootstrap';


const ItemList = () => {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {

       getProducts(setProducts);

    }, [])

    return (
        <Container fluid>   
            <CardGroup> 
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
            </CardGroup>
        </Container>
    )

}

export default ItemList;