import './App.scss';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';

import { Routes, Route } from 'react-router-dom';
import Latest from './pages/Latest';
import Product from './pages/Product';
import Search from './component/Search';
import { useState } from 'react';

function App() {
  const [searchClick, setsearchClick] = useState(true)

  return (
    <>
      <div className="PageContainer">
      <Search searchClick={searchClick} setsearchClick={setsearchClick}  />
      <Navbar searchClick={searchClick} setsearchClick={setsearchClick} />
      <Routes>
        <Route path='/latest' element={<Latest />}  />
        <Route path='/product' element={<Product />}  />
        <Route path='/' element={<Home />}  />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
