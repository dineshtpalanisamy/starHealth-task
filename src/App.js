import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/pre-builtHome" element={<UnderConstruction />} />
          <Route path="/courses" element={<UnderConstruction />} />
          <Route path="/pages" element={<UnderConstruction />} />
          <Route path="/elements" element={<UnderConstruction />} />
          <Route path="/blog" element={<UnderConstruction />} />
          <Route path="/help" element={<UnderConstruction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
