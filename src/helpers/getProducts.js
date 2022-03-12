const url = 'https://run.mocky.io/v3/5c92a6a0-5f76-4e8b-8a4c-a2a457049044';

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

