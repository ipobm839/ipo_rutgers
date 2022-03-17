import React from "react";
import { Login, Tab1, Tab2, Tab3, NotFoundPage } from "./views/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/ipo_rutgers' exact component={<Login />}/>
        <Route path="/ipo_rutgers/tab1" element={<Tab1 />} />
        <Route path="/ipo_rutgers/tab2" element={<Tab2 />} />
        <Route path="/ipo_rutgers/tab3" element={<Tab3 />} />
        <Route path="/ipo_rutgers/*" element={<NotFoundPage/>} />
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/*" element={<NotFoundPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

