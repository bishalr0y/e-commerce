import React from 'react';
import { Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
    const classes = useStyles();
    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link className={classes.link} to="/">start adding some</Link>!
            </Typography>
        )

    }
    const FilledCart = () => {

        return (<>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography className={classes.textMargin} variant="h4" gutterBottom>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            </div>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                <Button className={classes.checkout} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>

        </>)
    }

    if (!cart.line_items) {
        return "Loading...";
    }


    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
