import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import "antd/dist/reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:title" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;