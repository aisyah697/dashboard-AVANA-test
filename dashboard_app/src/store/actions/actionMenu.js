import axios from "axios";

// const data = require("../../../public/dummy-menu.json");

export const getMenu = () => {
  return (dispatch) => {
    axios
      .get("dummy-menu.json")
      .then((response) => {
        dispatch({
          type: "GET_MENU",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
