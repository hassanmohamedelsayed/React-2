import React from "react";
import './Header.css'

const Header=()=>{
  return(
<header>
<div className="container">
  <div className="row">
  <div className="col-md-6">
<h2>Good food choices
  <br/> are good <br/>investments.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
 Etiam et purus a odio finibus bibendum amet leo.</p>
 <button className="last-of">order Now</button>
 <button className="first-of">learn More</button>
  </div>
  <div className="col-md-6">
  </div>
  </div>
</div>

</header>
  )
}
export default Header