import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../Card/Card';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() =>{
      fetch('products.json')
      .then(res=> res.json())
      .then(data => setProduct(data))
    }, []);

    useEffect( ()=>{
        const storeCard = getShoppingCart();
        // console.log(storeCard)
        // console.log(products)
        const saveCard = [];
        //step 1: get id
       if(storeCard){
        for(const id in storeCard){
            console.log(id)
            //step 2: get the product by using id
            const addedProduct = products.find(product => product.id == id);
            console.log({addedProduct})
            //step 3: get quantity of product 
           if(addedProduct){
            const quantity = storeCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct);
           }
            // console.log(addedProduct);    
            }
       }
       setCard(saveCard);
    }, [products]);

    const handleAddToCard = (product) =>{
        const newCard = [...card, product];
        setCard(newCard);
        addToDb(product.id);
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