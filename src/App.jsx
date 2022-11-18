import React from "react";
import Header from "./components/Header";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TForm from "./views/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/form" element={<TForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
