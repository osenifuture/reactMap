import { Routes, Route } from "react-router-dom";
import Home from "./components/Route/Home";
import About from "./components/Route/About";
import New from "./components/Route/New";
import Navigation from "./components/NavBar/Navigation";
import NotFound from "./components/Route/NotFound";
import Service from "./components/Route/Services";



function App() {
  return (
    <Routes>
      <Route path="/" element= {<Navigation/>}>
        <Route index element= {<Home/>} />
        <Route path="/About" element= {<About/>} />
        <Route path="/New" element= {<New/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="*" element= {<NotFound/>} />
      </Route>
    </Routes>
  
  );
}

export default App;
