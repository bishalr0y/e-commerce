import React, { useState, useEffect } from "react";
import { commerce } from "./libs/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});


    const fetchProducts = async () => {
        const { data } = await commerce.products.list(); //returns a promise
        setProducts(data);
    }

    const fetchCart = async () => {
        const items = await commerce.cart.retrieve();
        setCart(items);
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);

    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    //console.log(products);
    console.log(cart);


    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default App;