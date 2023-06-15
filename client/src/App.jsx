import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Mypage from "./pages/users/mypages/Mypage";
import Ask from "./pages/questions/Ask";
import Question from "./pages/questions/Question";
import Signin from "./pages/users/login/Signin";
import Signup from "./pages/users/login/Signup";
import Edit from "./pages/questions/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/question" element={<Question />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
