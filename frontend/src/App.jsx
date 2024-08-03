import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'
import ArticleList from './components/Articles/ArticlesList';
import ProductList from './components/Products/ProductList';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import Logout from './components/Auth/Logout';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handelUserLogin = (user) => {
    setLoggedIn(user);
  }

  return (
    <Router>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        {
          loggedIn ? (
            <>
            <Route path="/contact" element={<ContactUs />} />
            </>
          ) : (
            <>
            <Route path="/signin" element={<Login onLogin={handelUserLogin} />} />
            <Route path="/signup" element={<Signup />} />
            </>
          )
        }
        <Route path="/logout" element={<Logout onLogout={handelUserLogin} />} />
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route exact path='/products' element={<ProductList />} />
      </Routes>
  </Router>
  )
}

export default App
