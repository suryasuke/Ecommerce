import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from '../src/pages/Cart';
import Footer from './components/Footer/Footer';
import betta_banner from './components/assets/banner_betta.png' ;
import lucky_banner from './components/assets/banner_lucky.png' ;
import sea_banner from './components/assets/banner_sea.png' ;
import LoginSignup from './pages/LoginSignup' ;



function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/betta' element={<ShopCategory banner ={betta_banner} category="betta"/> }/>
        <Route path='/lucky-fish' element={<ShopCategory  banner={lucky_banner} category="lucky-fish"/>}/>
        <Route path='/sea-fish' element={<ShopCategory  banner={sea_banner} category="sea-fish"/>}/>
        <Route path="/product/:productID" element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
   </div>
  );
}
export default App
