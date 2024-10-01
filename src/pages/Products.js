import React from "react";
import "../styles/socials.css"
import  "../styles/products.css"
import "./Candles"
import {Link} from "react-router-dom"


class Products extends React.Component {
  render() {
    return (
        <div>

        <h1 className="banner">Recommended Products For Your Inner Being</h1>

    <div className="thumbnails">
            <div className="card">Somavedic:Frequency generator
            <Link to="/Somavedic" >
                <img   className="thumb1" id="pic" src="https://somavedic.ca/cdn/shop/products/Sky_540x_5ed71b18-9d1b-49f3-80ef-5516ab2f72e9_400x.jpg?v=1624104654"  alt="Somavedic" /></Link>
           </div> 
           <div className="card" >Crystals CLeansing and Regenerating
            <Link to="/Crystals" >
                <img   className="thumb1" id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-ZS35-j1ASubzUFCsCuFKZBjBaQ6ZhLlB8XIXR3iNf8UTfkZ1nsKKzfexWg7wFbZFxg&usqp=CAU" alt="Crystals" /></Link>
           </div>
           <div className="card">Candles:Magical or Scented
            <Link to="/Candles" >
                <img   className="thumb1" id="pic" src="https://m.media-amazon.com/images/I/71+6fqol6OL._AC_UL320_.jpg" alt="Candles" /></Link>
           </div>
           <div className="card">Suppliments:For A Better Inner Being
            <Link to="/Supplements"  >
            <img   className="thumb1" id="pic" src="https://m.media-amazon.com/images/I/51YSRYZ66sL._AC_UL320_.jpg" alt="Supplements" /></Link>
           </div>
           <div className="card">EMF:
           For A Better Inner Being
            <Link to="/Emf" >
                <img   className="thumb1" id="pic" src="https://m.media-amazon.com/images/I/617uNoQtDwL._AC_UY218_.jpg" alt="EMF" /></Link>
           </div>
    </div>
<section className="paragraph">
    
        "These products are what we recomend"
    </section>
        </div>
    )
  }
}
  export default Products;