import Items from "./com/Items";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./com/Navbar";
import Add from "./com/Add";
import Update from "./com/Update";

function App() {
  return (
    <>
     <Router>
      
      <Routes>
        <Route path="/"element={<Items/>}/>
        <Route path="/contact"element={<div className="mt-5">Contact</div>}/>
        <Route path="/add"element={<Add/>}/>
        <Route path="/up/:id"element={<Update/>}/>
        <Route path="/orders"element={<div>Orders</div>}/>
        <Route path="/about"element={<div>About</div>}/>
        <Route path="/cart"element={<div>Cart</div>}/>
        <Route path="/*"element={<>hey !</>}/>

      </Routes>
      <Navbar/>
      {/* <Footer/> */}
     </Router>
    {/* <Items/> */}
    </>
  );
}

export default App;
