import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddBlog from "./Components/AddBlog/AddBlog";
import AddCard from "./Components/AddCard/AddCard";
import Contacts from "./Components/Contacts/Contacts";
import Favorites from "./Components/Favorites/Favorites";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AddBlog />
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
