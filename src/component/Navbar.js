import React from 'react'

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from '../NavbarElements';

const Navbar = () => {
  return (
    <>
           <Nav>
            <NavLogo to="/">
                Ghost Runner
            </NavLogo>
            

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/pumpkins"
                  activeStyle={{ color: 'black' }}
                >
                    (secret game)
                </NavLink>
                <NavLink 
                  to="/game" 
                  activeStyle={{ color: 'black' }}
                >
                    Game
                </NavLink>
                {/* <NavLink
                  to="/signin"
                  activeStyle={{ color: 'black' }}
                >
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink> */}
                {/* </NavBtn> */}
            </NavMenu>
           </Nav> 
        </>
  );
};

export default Navbar