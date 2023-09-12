import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Books from "./pages/Books";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Books/>}/>
          <Route path="/update" element={<Books/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
