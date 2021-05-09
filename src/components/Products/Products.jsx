import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles"

const products = [
    { id: 1, name: "Macbook Air", price: "Rs 98000", description: "Apple Macbook Air", image: "https://sm.mashable.com/t/mashable_in/review/m/macbook-ai/macbook-air-late-2020-review-the-one-with-apple-silicon-insi_2quc.960.jpg" },
    { id: 2, name: "Nike Shoes", price: "Rs 8000", description: "Running Shoes", image: "https://media.gq-magazine.co.uk/photos/5eda54b0ed80d8890ee2ee4c/master/w_1920,c_limit/20200605-nike-06.jpg" }

];

const Products = () => {
    const classes = useStyles();
    return (<main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>)
}

export default Products;