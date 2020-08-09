import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

//components
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default MainRoutes;
