import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
  return (
    <div className = "home">

        <div className = "home-container">

            <img className = "home_image" src = "./spiderHome.jpg" alt = "" />

            <div className = "home_row">

                <Product  
                    id = "2321"
                    title = "제품 1입니다"
                    price = { 3000 }
                    image = "./spider1.jpg" 
                    rating = {5}/>

                <Product  
                    id = "2322"
                    title = "제품 2입니다"
                    price = { 5000 }
                    image = "./spider2.jpg" 
                    rating = {4}/>

            </div>

            <div className = "home_row">

                <Product  
                    id = "2323"
                    title = "제품 3입니다"
                    price = { 4000 }
                    image = "./spider3.jpg" 
                    rating = {3}/>

                <Product  
                    id = "2324"
                    title = "제품 4입니다"
                    price = { 7000 }
                    image = "./spider4.jpg" 
                    rating = {5}/>

                <Product  
                    id = "2325"
                    title = "제품 5입니다"
                    price = { 6500 }
                    image = "./spider5.jpg" 
                    rating = {3}/>

            </div>

            <div className = "home_row">

                <Product  
                    id = "2326"
                    title = "제품 6입니다"
                    price = { 4500 }
                    image = "./spider6.jpg" 
                    rating = {2}/>      

            </div>

        </div>

    </div>
  )
}
