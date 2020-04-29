import React from 'react'


const Nav = ({ handleSignin }) => {
  return (
    
    <div>
      <header>
        <nav>
          <h1><font color="white">Gundam Shop</font></h1>
          <ul>
            <li><a href="#">
              <button onClick={handleSignin}>Cart<ion-icon name="cart-outline"></ion-icon></button>
            </a></li>

          </ul>
        </nav>
      </header>

    </div>
  )
}

export default Nav