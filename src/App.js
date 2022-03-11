import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductsPage';
import DetailPage from './pages/DetailPage';
import NavBar from './components/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/category/:categoryId" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>

    </Router>
  );
}

export default App;
