import React from 'react';
import Product from './Item';
import Products from '../item-data';
import {Container} from 'react-bootstrap';


const ItemList = () => {
    return(
        <div>
            {
                Products.map(product => (
                    <Container>
                        <Product key={product.id} product={product}/>
                    </Container>
                )
            )}
        </div>
        )  
}

export default ItemList;