// components/Navbar/index.js
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';

import Item from './Item';
import Upload from './Upload';
import Mobile from './Mobile';
import Register from './Register';
import Login from './Login';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/electronics" activeStyle>
                        Electronics
                    </NavLink>
                    <NavLink to="/mobile" activeStyle>
                        Mobile
                    </NavLink>
                    <NavLink to="/laptop" activeStyle>
                        Laptop
                    </NavLink>
                    <NavLink to="/shoe" activeStyle>
                        Shoe
                    </NavLink>
                      <NavLink to="/cloths" activeStyle>
                        Cloths
                    </NavLink>
                   
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">
                       Login
                    </NavBtnLink>
                    <NavBtnLink to="/register">
                       Register
                    </NavBtnLink>

                </NavBtn>
                
            </Nav>
            <Routes>
        <Route path='/' Component={Home}></Route>
         <Route path='/electronics' Component={Electronics}></Route>
          <Route path='/mobile' Component={Mobile}></Route>
            <Route path='/item' Component={Item}></Route>
            <Route path='/upload' Component={Upload}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/login' Component={Login}></Route>
      </Routes>
        </>
    );
};

export default Navbar;