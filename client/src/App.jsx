import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from 'react-router-dom';

// Hoc
import HomeLayoutHoc from "./HOC/Home.Hoc";

//Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Redirect from='/' to="/delivery"/>
    <HomeLayoutHoc exact component={ HomePage} path="/" />
    <HomeLayoutHoc exact component={HomePage} path='/:type'/>
    </>
  );
}

export default App;
