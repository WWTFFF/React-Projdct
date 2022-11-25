// 페이지 이동 목적 모듈 import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/product/:productName" element={<ProductDetailPage />} />
        <Route path="/product/:category" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
