import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        {/* Later */}

        {/* 
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/customize"
          element={<Customize />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />
        */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;