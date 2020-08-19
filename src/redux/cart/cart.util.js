export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingItems = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if(existingItems){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
            );
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}];
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingItems.quantity === 1) {
        return (cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id))
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
        );
}