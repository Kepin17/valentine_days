import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContentPage from "./pages/MainContentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContentPage />} />
      </Routes>
    </>
  );
}

export default App;
