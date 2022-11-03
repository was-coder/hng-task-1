import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Contact } from "../imports/Imports";

function GetRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default GetRoutes;
