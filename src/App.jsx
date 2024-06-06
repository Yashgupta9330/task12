import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Selfbooks from "./pages/Selfbooks";


export default function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/self" element={<Selfbooks/>}/>
     </Routes>
  );
}
