import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Collections from "./pages/Collections";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import { SneakerProvider } from "./Contexts/SneakersContext";

function App() {
  return (
    <>
      <SneakerProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Product />} />
              <Route path="collections" element={<Collections />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SneakerProvider>
    </>
  );
}

export default App;
