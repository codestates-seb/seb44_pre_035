import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Mypage from "./pages/users/mypages/Mypage";
import Ask from "./pages/questions/Ask";
import Question from "./pages/questions/Question";
import Signin from "./pages/users/login/Signin";
import Signup from "./pages/users/login/Signup";
import Edit from "./pages/questions/Edit";
import Layout from "./share/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="ask" element={<Ask />} />
          <Route path="edit" element={<Edit />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="question/:id" element={<Question />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
