import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import Store from './store/Store';

function App() {
  return (
    <>
      <div className='App'>
        <Provider store={Store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>

    </>
  );
}

export default App;
