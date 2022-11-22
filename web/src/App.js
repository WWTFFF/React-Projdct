// 페이지 이동 목적 모듈 import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:category" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
