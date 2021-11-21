import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompage";
import CreateAthlete from "./pages/Athletes/CreateAthlete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route
          path='/create-athlete'
          element={<CreateAthlete isCreate={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
