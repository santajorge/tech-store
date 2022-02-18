import React from 'react';
import Carrito from './assets/img/Carrito.png';


function CartWidget() {
    return(
        <div>
            <img
                src={Carrito}
                alt='Cart Logo'
                width={100}
                height={100}
            />
        </div>

    )

}

export default CartWidget