import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

        const [menu,setMenu] = useState("shop");
        const {getTotalCartItems}=useContext(ShopContext);
        const menuRef = useRef(); 

        const dropdown_toggle = (e) =>{
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');
        }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" width="100" height="100"/>
                <p className="title">Nexus</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration:'none' }} to='/'>Tienda</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Ropa")}}><Link style={{ textDecoration:'none' }} to='/Ropa'>Ropa</Link>{menu==="Ropa"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Electrodomesticos")}}><Link style={{ textDecoration:'none' }} to='/Electrodomesticos'>Electrodomesticos</Link>{menu==="Electrodomesticos"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Gamer")}}><Link style={{ textDecoration:'none' }} to='/Gamer'>Zona Gamer</Link>{menu==="Gamer"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Joyeria")}}><Link style={{ textDecoration:'none' }} to='/Joyeria'>Joyeria</Link>{menu==="Joyeria"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/signin'><button>Mi cuenta</button></Link>}   
                <Link to='/cart'><img src={cart_icon} alt="" width="45" height="45"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        
    )
}

export default Navbar