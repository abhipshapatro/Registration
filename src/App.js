import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen3 from "./screens/Screen3";
import PhoneNumberInput from "./components/PhoneNumberInput";



function App() {
  return (
    <div className="w-full h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/password" element={<Screen2 />} />
          <Route path="/modal" element={<Screen3 />} />
          <Route path="/phone" element={<PhoneNumberInput />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
