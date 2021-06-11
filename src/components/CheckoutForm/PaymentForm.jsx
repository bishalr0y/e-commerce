import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import Review from './Review';



const PaymentForm = ({ checkoutToken, shippingData, nextStep, backStep, onCaptureCheckout }) => {

    const handleSubmit = async (event) => {
        
        event.preventDefault(); //this will prevent the website from getting refresh after the button is clicked
       

       

        
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email }, 
                shipping: { 
                    name: 'International', 
                    street: shippingData.address1, 
                    town_city: shippingData.city, 
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                }
            };
        onCaptureCheckout(checkoutToken.id, orderData);

            nextStep();
    };

   

    return (
        <div>
        <Review checkoutToken = {checkoutToken} />
        <Divider />
        <Typography varinat ="h6" gutterBottom style = {{margin: '20px 0'}}>Payment Method</Typography>
            <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant = "outlined" onClick = {backStep} > Back </Button>
                <Button type = "submit" variant = "contained" color= "primary" onClick = {(e) => handleSubmit(e)}> 
                            Pay {checkoutToken.live.subtotal.formatted_with_symbol} 
                </Button>
            </div>
    </div>
    )
}

export default PaymentForm;



