import axios from "axios";

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
