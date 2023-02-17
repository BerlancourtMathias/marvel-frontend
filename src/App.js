import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//----Pages----
import Characters from "./pages/Characters/index";
import Comics from "./pages/Comics/index";
import Character from "./pages/Character/index";
//----components----
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  const [queryElement, setQueryElement] = useState("");
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Characters
                  queryElement={queryElement}
                  setQueryElement={setQueryElement}
                />
              }
            />
            <Route
              path="/comics"
              element={
                <Comics
                  queryElement={queryElement}
                  setQueryElement={setQueryElement}
                />
              }
            />
            <Route path="/character" element={<Character />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
