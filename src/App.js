import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watch from "./Watch";
import Check from "./Check";
import Coffee from "./Coffee";
import About from "./About";


function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/check" element={<Check />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;