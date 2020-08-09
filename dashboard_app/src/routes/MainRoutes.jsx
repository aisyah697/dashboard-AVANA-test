import React from "react";
import {Route} from "react-router-dom";

//components
import Home from "../pages/Home";

const MainRoutes = () => {
    return (
        <Route exact path="/" component={Home} />
    )
}

export default MainRoutes;