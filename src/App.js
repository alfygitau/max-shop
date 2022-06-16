import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Homepage/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* all public routes */}
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
