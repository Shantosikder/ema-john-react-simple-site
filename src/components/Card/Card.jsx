import React from 'react';
import './Card.css';

const Card = ({card}) => {
    // const {card} = props;
    console.log(card)
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of card){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax=totalPrice*7/100;
    const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='card'>
        <h4>Order Summary</h4>
        <p>Selected Item: {card.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Card;