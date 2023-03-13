import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainView } from "./components/MainView/MainView";
import { createContext, useEffect, useState } from "react";
import { Mercury } from "./components/Mercury/Mercury";
import { Earth } from "./components/Earth/Earth";
import { Jupiter } from "./components/Jupiter/Jupiter";
import { Mars } from "./components/Mars/Mars";
import { Neptune } from "./components/Neptune/Neptune";
import { Saturn } from "./components/Saturn/Saturn";
import { Venus } from "./components/Venus/Venus";
import {Uranus} from "./components/Uranus/Uranus";

export const DataContext = createContext("");

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5173/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App w-screen h-screen bg-[#070724]">
      <DataContext.Provider value={{ data, setData }}>
        <Router>
          <Routes>
            <Route path="/" element={<MainView />}>
              <Route path="mercury" element={<Mercury />} />
              <Route path="earth" element={<Earth />} />
              <Route path="jupiter" element={<Jupiter />} />
              <Route path="mars" element={<Mars />} />
              <Route path="neptune" element={<Neptune />} />
              <Route path="saturn" element={<Saturn />} />
              <Route path="venus" element={<Venus />} />
              <Route path="uranus" element={<Uranus />} />
            </Route>
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
