import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

//components
import Home from "../pages/Home";

//store
import store from "../store/index";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
