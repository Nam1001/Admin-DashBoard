import Home from "./Pages/Home/Home";
import "./Pages/Home/home.scss"
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings/Settings";
function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/setting" element={<Settings/>} />
 
    </Routes>

    
  </>
  );
}

export default App;
