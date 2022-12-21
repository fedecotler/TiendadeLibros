import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "../components/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:category" element={<ItemListContainer />} />
        <Route path="/data/:slug" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
