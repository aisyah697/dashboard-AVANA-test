import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//reducer
import menuReducer from "./reducers/menuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("check store", store.getState()));

export default store;
