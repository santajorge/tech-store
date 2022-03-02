import React from 'react';
import ProductCard from './Item';
import { useEffect } from 'react';
import {Container} from 'react-bootstrap';


const ItemList = () => {

    const url = 'https://run.mocky.io/v3/31619adb-d558-48a6-af27-db4159426e04';

    const [products, setProducts] = React.useState([])

    const getProducts = async () => {

        try{
            const response = await fetch(url);
            setProducts (response.json());
        }   catch(error){
            console.log(error);
        }
            
    }

    useEffect(() => {

       getProducts();

    }, [])

    return (
        <Container>
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
        </Container>
    )

}

export default ItemList;