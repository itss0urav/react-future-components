import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllButtons from "./pages/AllButtons";
import AllCards from "./pages/AllCards";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/AllButtons" element={<AllButtons />} />
          <Route path="/AllCards" element={<AllCards />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;