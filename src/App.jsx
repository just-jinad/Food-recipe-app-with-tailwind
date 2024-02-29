import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Index";
import Home from "./pages/home";
import Favorites from "./pages/favourites";
import Details from "./pages/details";

function App() {
  return (
    <>
      <div className=" min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
