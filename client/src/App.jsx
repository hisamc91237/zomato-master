import "./App.css";


// Hoc
import HomeLayoutHoc from "./HOC/Home.Hoc";

//Pages
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
    <HomeLayoutHoc component={ HomePage} path="/" />
    </>
  );
}

export default App;
