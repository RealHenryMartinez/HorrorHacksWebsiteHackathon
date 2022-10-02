
import Navbar from "./component/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";


// web pages
import Home from "./pages/Home";
import Pumpkins from "./pages/Pumpkins";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pumpkins' element={<Pumpkins />} />
        <Route path='/game' element={<Game />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
