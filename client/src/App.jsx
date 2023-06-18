import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Mypage from "./pages/users/mypages/Mypage";
import AskPage from "./pages/questions/AskPage";
import Question from "./pages/questions/Question";
import Signin from "./pages/users/login/Signin";
import Signup from "./pages/users/login/Signup";
import EditPage from "./pages/questions/EditPage";
import Layout from "./share/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="edit" element={<EditPage />} />
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
