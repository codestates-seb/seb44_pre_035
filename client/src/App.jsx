import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/question" element={<Question />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
export default App;
