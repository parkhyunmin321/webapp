import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

export default function Checkout() {
  return (
    <div className = "checkout">
      <div className = "checkout_left">

        <img className = "checkout_ad"
          src = "./spiderHome.jpg" alt = "" />

          <div>
            <h2 className = "checkout_title">
              장바구니입니다
            </h2>

              {/* 장바구니 아이템
              장바구니 아이템
              장바구니 아이템
              장바구니 아이템 */}
            
          </div>

      </div>

      <div className = "checkout_right">
        <Subtotal />
      </div>

    </div>
  )
}
