import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./pages/Deals/Deals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;