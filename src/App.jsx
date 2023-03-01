import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainView } from "./components/MainView/MainView";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext("");

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:5173/public/data.json").then((response) => response.json()).then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="App w-screen h-screen bg-[#070724]">
      <DataContext.Provider value={{data, setData}}>
        <Router>
          <Routes>
            <Route path="/" element={<MainView />}></Route>
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
