import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentComponent from "./ParentComponent";
import Login from "./components/login/Login";
import { useState } from "react";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentComponent flag={isLogged} setter={setIsLogged} />} />
        <Route path="/login" element={<Login setter={setIsLogged} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;