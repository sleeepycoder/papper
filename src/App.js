import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
 <BrowserRouter>
<Navbar/>

<Routes>
<Route path="/carrier" element={<Main/>}/>



</Routes>



 </BrowserRouter>
   
  );
}

export default App;
