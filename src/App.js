import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Skill from "./Pages/Skill";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="edit" element={<Home />} />
          <Route path="skill" element={<Skill />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
