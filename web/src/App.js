// 페이지 이동 목적 모듈 import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoryProductPage from "./pages/CategoryProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/product/:productName" element={<ProductDetailPage />} />
        <Route path="/category/:category" element={<CategoryProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
