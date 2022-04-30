import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import deshboardCounter from "./reducers";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"], // only navigation will be persisted
};

const rootReducer = combineReducers({
  deshboardCounter,
  userReducer,
});

// for logut and clear state in redux
const reducerController = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducerController);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
