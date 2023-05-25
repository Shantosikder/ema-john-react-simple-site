import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../Card/Card';


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
        <Card card={card}></Card>
        </div>
        </div>
    );
};

export default Shop;