import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { commsAPI } from "../services/CommsService";
import { newsAPI } from "../services/NewsService";
import { ordersAPI } from "../services/OrdersServices";
import { userAPI } from "../services/UserService";

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [commsAPI.reducerPath]: commsAPI.reducer,
  [ordersAPI.reducerPath]: ordersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(newsAPI.middleware)
        .concat(commsAPI.middleware)
        .concat(ordersAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
