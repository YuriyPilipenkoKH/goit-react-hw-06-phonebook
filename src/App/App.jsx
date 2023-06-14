
import { lazy} from 'react';

import { Route, Routes } from 'react-router-dom';

// import { PrivateRoute } from '../components/PrivateRoute';
// import { RestrictedRoute } from '../components/RestrictedRoute';

// import { refreshUser } from 'redux/auth/operations';

import { Layout } from 'components/Layout/Layout';
import { Container } from 'components/container/Container';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';

// import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
// import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const PhonebookPage = lazy(() => import('../pages/Phonebook'));



const App = () => {

  return (
   
    <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={< Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="phonebook" element={<Phonebook/>} />
     
       
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
   {/* <ToTopButton/> */}
    </Container>


  );
};

export default App;

  //   <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<HomePage />} />
  //     <Route
  //       path="/register"
  //       element={
  //         <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
  //       }
  //     />
  //     <Route
  //       path="/login"
  //       element={
  //         <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
  //       }
  //     />
  //     <Route
  //       path="/tasks"
  //       element={
  //         <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
  //       }
  //     />
  //   </Route>
  // </Routes>