const addToDb = id => {

    let shoppingCart;

    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }else{
        shoppingCart={};
    }


    //add   quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('Already exits');
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id,newQuantity);
    } else {
        // console.log('new item');
        // localStorage.setItem(id,1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



}

export { addToDb }