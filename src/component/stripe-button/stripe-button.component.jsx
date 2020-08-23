import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // this is done because stripe needs the amount to be in cents and thus we are converting the amount
    const publishableKey = 'pk_test_51HJMfgLARCAQyPBegxReVuBBz2FlYKlXZMehq4RAer7gA08yBodzEAEvObUOK46WDw8Lj8sFM5gMZTe2ccApYmM500EvKkO8Cx';
    
    const onToken = token => {
        console.log('Payment successful')
        alert('Pay Successful')
    }

    return (
        <StripeCheckout 
            label = "Pay now"
            name = 'Shopping Cart Ltd. - PB'
            billingAddress
            shippingAddress
            image = ''
            description = {`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    ) 
}

export default StripeCheckoutButton;