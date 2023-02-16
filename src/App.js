import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//----Pages----
import Characters from "./pages/Characters/index";
//----components----
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
