import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import {Container} from 'react-bootstrap';

const DetailPage = () => {

    const {id} = useParams();

  return (
    <main>
        <Container className="mt-2 text-center">
            <h1>Detalle de Producto</h1>
            <ItemDetailContainer id={id} />
        </Container>
    </main>
  )
}

export default DetailPage