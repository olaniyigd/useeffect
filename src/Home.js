import "./App.css";
import Nav from "./Nav"
import Front from "./Front";
import Demo from "./Demo";
import Footer from "./Footer";

function Home (){
  return(
    <div>
      <Nav />
      <Front />
      <Demo />
      <Footer />
    </div>
  )
}

export default Home;