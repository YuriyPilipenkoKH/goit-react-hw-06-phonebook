import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet, Navlink } from 'react-router-dom';
import { MainFooter, MainHeader, StyledLink } from "./Layout.styled";

export const Layout = () => {
    return (
        <>
        <MainHeader>
          {/* <Logo className="logo" ></Logo> */}
  
          <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/phonebook'>Phonebook</StyledLink>
            <StyledLink to='/login'>Login</StyledLink>
            <StyledLink to='/register'>Register</StyledLink>
          </nav>
          {/* <Kharkiv className="KH-icon" ></Kharkiv> */}
        </MainHeader>
  
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter>React-hw-08-phonebook 2023</MainFooter>
          </>
    )}