import React from 'react';
import { Typpgraphy, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = ({ checkoutToken }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
        </>
    )
}

export default PaymentForm;
