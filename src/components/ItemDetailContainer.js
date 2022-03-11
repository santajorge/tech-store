import React, {useEffect, useState} from 'react'


import { getProductsById } from '../helpers/getProducts'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {

    const [product, setProduct] = useState(null);

    useEffect(() => {

        getProductsById(id, setProduct);
        console.log(product);
    }, [id]);

  return (
    <div>
        {
            product ?

            <ItemDetail product ={product} />

            : <h1>Cargando...</h1>
        }


    </div>
  )
}

export default ItemDetailContainer