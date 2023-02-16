import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//----Pages----
import Characters from "./pages/Characters/index";
import Comics from "./pages/Comics/index";
//----components----
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
