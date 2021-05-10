import React, { useState, useEffect } from "react";
import { commerce } from "./libs/commerce";
import { Products, Navbar } from "./components";

const App = () => {

    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const { data } = await commerce.products.list(); //returns a promise
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
        }, []);
    console.log(products);

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;