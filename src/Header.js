import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import auth from 'react'

export default function Header() {
    const [{basket,user}, dispatchEvent] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className = "header">
        <Link to = "/">
            <img className = "header_logo" src = "./logoCCart.png" />
        </Link>

            <div className = "header_search">
                <input className = "header_searchInput" type = "text"/>
                <button className = "header_searchIcon">검색</button>
            </div>

        <div className = "header_nav">

            <div className = "header_option">
                <span className = "header_optionLineOne">안녕하세요 ! </span>
                <Link to = {!user && "/Login"} className = "homelogin">
                <span onClick = {handleAuthentication} className = "header_optionLineTwo">로그인</span>
                </Link>      
            </div>

            <div className = "header_option">
                <span className = "header_optionLineOne">돌아가기 </span>
                <span className = "header_optionLineTwo">주문내역</span>

          
            </div>

            <div className = "header_option">
                <span className = "header_optionLineOne">HI </span>
                <span className = "header_optionLineTwo">HIIII</span>

             
            </div>

            <Link to = "/checkout">
                <div className = "header_optionBasket">

                    {/* <ShoppingBasket /> */}
                    <span className = "header_optionLineTwoheader_basketCount">

                        {basket.length}

                    </span>

                </div>
            </Link>

        </div>

        
    </div>
  )
}
