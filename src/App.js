import React from "react";
import { Login, Tab1, Tab2, Tab3, NotFoundPage } from "./views/";
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

