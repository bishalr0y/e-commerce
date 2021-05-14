import React from 'react';
import { Typography, Button, Card, CardAction, CardContent, CardMedia } from "@material-ui/core"
import useStyles from "./styles";


const CartItem = ({ item }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.cardContent} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
                <CardAction className={classes.CardAction}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small">-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size="small">+</Button>

                    </div>
                    <Button variant="contained" type="button" color="secondary">Remove</Button>
                </CardAction>


            </CardContent>
        </Card>
    )
}

export default CartItem
