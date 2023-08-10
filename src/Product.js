import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

export default function Product( {id, title, image, price, rating} ) {

    const [{basket}, dispatchEvent] = useStateValue();
    const addToBasket = () => {

        dispatchEvent({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating,
            },
        });

    };


  return (
    <div className = "product">
        <div className = "product_info">

            <p>{ title }</p>
            <p className = "product_price">
                <small>가격</small>&nbsp;
                <strong>{ price }</strong>
                <small>원</small>

            </p>

            <div className = "product_rating">
                {
                    Array(rating)
                        .fill()
                        .map(() => (
                            <p>★</p>
                        ))
                }



                
            </div>

        </div>
       
        <img src = { image } alt = "" />
        <button onClick = {addToBasket}>장바구니 담기</button>

    </div>
  )
}

