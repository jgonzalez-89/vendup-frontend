import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home.jsx';
import injectContext from './store/appContext';
import Terms from './components/Terms.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import FAQs from './components/FAQs.jsx';
import Userpage from './views/userpage.jsx';
import ProductView from './views/productview.jsx';
import Payment from './views/payment.jsx';
import Error404 from './views/error404.jsx';

const Layout = () => {
  const basename = '/' || '';

  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductView />} path="/products" />
          <Route element={<Payment />} path="/pay" />
          <Route element={<Userpage />} path="/user" />
          <Route element={<Home />} path="/home" />
          <Route element={<Terms />} path="/terms" />
          <Route element={<FAQs />} path="/faqs" />
          <Route element={<Team />} path="/team" />
          <Route element={<About />} path="/about" />
          <Route element={<Error404 />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
