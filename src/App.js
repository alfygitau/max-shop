import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import Cart from "./pages/Cart/Cart";
import { Home } from "./pages/Homepage/Home";
import Login from "./pages/Login/Login";
import Store from "./pages/Store/Store";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* all public routes */}
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="store" element={<Store/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
