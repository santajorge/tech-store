import React from 'react';
import Carrito from './assets/img/Carrito.png';


function CartWidget() {
    return(
        <div>
            <img
                src={Carrito}
                alt='Cart Logo'
                width={120}
                height={120}
            />
        </div>

    )

}

export default CartWidget