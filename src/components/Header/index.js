import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../context/StateProvider'
import { auth } from '../../firebase'

function Header() {
    const [{basket,user}] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
        <Link to="/">
        <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
     <div className="header_search">
        <input className="header_searchInput" type="text"/>
        <SearchIcon className="header_searchIcon"/>
     </div>
     <div className="header_nav">
            <Link to={!user && "/login"}>
        <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionLineOne">Hello {user ? user.email : "Guest"}</span>
            <span className="header_optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
            
        </div>
            </Link>
        <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>

        </div>
        <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>

        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingBasket/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div> 
        </Link>
     </div>
    </div>
    )
}

export default Header
