import redux, { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("check store", store.getState()));

export default store;
