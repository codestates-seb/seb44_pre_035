import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Mypage from "./pages/mypages/Mypage";
import MypageSetting from "./pages/mypages/MypageSetting";
import MypageDelete from "./pages/mypages/MypageDelete";
import MypageEdit from "./pages/mypages/MypageEdit";
import AskPage from "./pages/questions/AskPage";
import Question from "./pages/main/Question";
import Login from "./pages/users/Login";
import Signup from "./pages/users/Signup";
import EditPage from "./pages/questions/EditPage";
import Layout from "./share/Layout";
import Search from "./pages/main/Search";
import EditAnswerPage from "./pages/questions/EditAnswerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="edit/:questionId" element={<EditPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/profile" element={<Mypage />} />
          <Route path="/mypage/setting" element={<MypageSetting />} />
          <Route path="/mypage/userdelete" element={<MypageDelete />} />
          <Route path="/mypage/useredit" element={<MypageEdit />} />
          <Route path="question/:id" element={<Question />} />
          <Route path="editAnswer" element={<EditAnswerPage />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
