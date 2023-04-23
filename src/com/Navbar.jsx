import React from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import Add from './Add'
// import "public/fp.png"
const Navbar = () => {

  return (
    <div>
        <nav>
        <Link to={"/"}><img src="fppp.png" alt="ddd" /></Link>
        
        <div className='hey'>
          <input type="text"placeholder='Search Here'className='sea' />
          <div className='sicon'>
            <a href="#"><img class="ss" src="find.png" alt="" /></a>
          </div>

        </div>
        
        
        <main>
            
            <ul className='navbar ull'>
               <li>
                <div>
                <NavLink to={"/cart"} className="nv"><img src="cart.png" class='cion' alt="" /></NavLink>
                {/* <a href="#"><img src="cart.png" alt="" /></a> */}
                </div>
                </li>
                <li><NavLink to={"/add"} className="nv">Add</NavLink></li>
                <li><NavLink to={"/contact"}className="nv">Contact</NavLink></li>
                <li><NavLink to={"/orders"}className="nv">Orders</NavLink></li>
                <li><NavLink to={"/about"}className="nv">About</NavLink></li>
            </ul>
        </main>
    </nav>

    </div>
    
  )
}

export default Navbar;