import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainView } from "./components/MainView/MainView";

function App() {
  return <div className="App w-screen h-screen bg-[#070724]">
    <Router>
      <Routes>
        <Route path="/" element={<MainView/>}></Route>
      </Routes>
    </Router>
  </div>;
}

export default App;
