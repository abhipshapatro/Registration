import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="w-full h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/password" element={<Screen2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
