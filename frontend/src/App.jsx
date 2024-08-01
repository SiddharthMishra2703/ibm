import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'
import ArticleList from './components/Articles/ArticlesList';
import ProductList from './components/Products/ProductList';
import Navbar from './components/NavBar/NavBar';
function App() {
  const loggedIn = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        {
          loggedIn ? (
            <>
            {/* <Route path="/logout" element={<Logout />} /> */}
            </>
          ) : (
            <>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route exact path='/products' element={<ProductList />} />
            </>
          )
        }
      </Routes>
  </Router>
  )
}

export default App
