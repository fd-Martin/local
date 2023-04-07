const addToDb = id => {

    let shoppingCart;
    //get the shopping cart from local storeage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }


    //add   quantity
    const quantity = shoppingCart[id];
    if (quantity) {

        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;

    } else {

        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



}

export { addToDb }