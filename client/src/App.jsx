import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <><div className="App">
      <Header />
    </div><BrowserRouter>
        <div className="App">
          <Routes>
            <Route paht="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter></>
  );
}

export default App;
