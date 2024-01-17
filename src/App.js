import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Pnf from './pages/Pnf';


function App() {
  return (
    <div className="App">
      <Header></Header>

     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/wishList' element={<Wishlist></Wishlist>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>
     </Routes>
    
      <Footer></Footer>
    </div>

  );
}

export default App;
