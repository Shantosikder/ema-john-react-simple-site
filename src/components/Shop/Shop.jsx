import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() =>{
      fetch('products.json')
      .then(res=> res.json())
      .then(data => setProduct(data))
    }, []);

    const handleAddToCard = (product) =>{
        const newCard = [...card, product];
        setCard(newCard);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
        {
            products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCard={handleAddToCard}
            ></Product>)
        }
        </div>
        <div className="card-container">
        <h4>Order Summary</h4>
        <p>Selected Item: {card.length}</p>
        </div>
        </div>
    );
};

export default Shop;