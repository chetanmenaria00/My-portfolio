import './App.css';
import AboutUs from './pages/aboutUs/AboutUs';
import Connect from './pages/connect/Connect';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './pages/main/Mainpage';

function App() {
  return (
    <>
      <Mainpage/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<HomePage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
