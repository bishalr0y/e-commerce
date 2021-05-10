import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions } from "@material-ui/core";
import { AddShoppingCart, ControlCameraOutlined } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {

    console.log(product);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterbottom="true">
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cartActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product
