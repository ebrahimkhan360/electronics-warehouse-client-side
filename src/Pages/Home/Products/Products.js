import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://boiling-cove-18782.herokuapp.com/servics')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id="products" className='container'>
            <div className='row'>
                <h1 className='mt-5 products-title'>FEATURED PRODUCTS</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            service={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;