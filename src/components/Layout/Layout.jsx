import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { MainFooter, MainHeader} from "./Layout.styled";

export const Layout = () => {
    return (
        <>
        <MainHeader>
        <AppBar/>
        </MainHeader>
        <Suspense >
                  <Outlet />
        </Suspense>
        
        <MainFooter>React-Phonebook-2023</MainFooter>
          </>
    )}