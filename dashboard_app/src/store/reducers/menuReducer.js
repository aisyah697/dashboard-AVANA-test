const data = require("../../components/data/dummy-menu.json");

export default function menuReducer(menuState = data, action) {
  switch (action.type) {
    case "GET_MENU":
      return {
        listMenu: action.payload,
      };
    default:
      return menuState;
  }
}
