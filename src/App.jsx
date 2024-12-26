import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/register" element={<SigninPage />} />
    </Routes>
  );
}

export default App;