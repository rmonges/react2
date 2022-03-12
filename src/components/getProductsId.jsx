const url = 'https://run.mocky.io/v3/e43b2557-0fa6-44f9-9b03-c9cf9ce0b49f';

export const getProductsId = async (id , setState) => {
    
    try {
         const resp  = await fetch(url)
         const data = await resp.json()
         const product = data.find(i => i.id === id)
         setState(product)
    } catch (error) {
        console.log(error);
    
    }

}