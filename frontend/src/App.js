import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/delete/:id" element={<DeletePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
