import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from 'react-router-dom';

// Hoc
import HomeLayoutHoc from "./HOC/Home.Hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import CheckoutLayoutHoc from './HOC/Checkout.hoc';

//Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/CheckoutPage";

// components
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu/Menu";
import Photos from "./components/Restaurant/Photos/Photos";


function App() {
  return (
    <>
    <Route path = '/' exact>
    <Redirect to="/delivery"/>
    </Route>
    <HomeLayoutHoc exact component={ HomePage} path="/" />
    <HomeLayoutHoc exact component={HomePage} path='/:type'/>
    <RestaurantLayoutHoc path='/restaurant/:id' exact component={RestaurantPage}/>
    <RestaurantLayoutHoc path='/restaurant/:id/overview' exact component={Overview}/>
    <RestaurantLayoutHoc path='/restaurant/:id/order-online' exact component={OrderOnline}/>
    <RestaurantLayoutHoc path='/restaurant/:id/reviews' exact component={Reviews}/>
    <RestaurantLayoutHoc path='/restaurant/:id/menu' exact component={Menu}/>
    <RestaurantLayoutHoc path='/restaurant/:id/photos' exact component={Photos}/>
    <CheckoutLayoutHoc path='/checkout/orders' exact component={Checkout}/>
    </>
  );
}

export default App;
