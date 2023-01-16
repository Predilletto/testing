import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import RandomDog from "../pages/RandomDog";
import HttpCat from "../pages/HttpCat";
import Users from "../pages/Users";
import Clientes from "../pages/Clientes";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dogs" element={<RandomDog />} />
        <Route path="/cats" element={<HttpCat />} />
        <Route path="/users" element={<Users />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
