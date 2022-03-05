const url = 'https://run.mocky.io/v3/65dbbf39-ae2e-4d30-ac4e-1a0082f18306';

export const getProducts = async (setState) => {

    try{
        const response = await fetch(url);
        const data = await response.json();
        setState(data);
    } catch(error){
        console.log(error);
    }
            
}

export const getProductsById = async (id, setState) => {

    try{
        const response = await fetch(url);
        const data = await response.json();
        const product = data.find(product => product.id === id);
        setState(product);

    } catch(error){
        console.log(error);
    }

}

