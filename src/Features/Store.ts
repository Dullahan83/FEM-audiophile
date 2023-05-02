import {
   combineReducers,
   configureStore,
   getDefaultMiddleware,
} from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import productReducer from "./Slices/productSlice";
import storage from "reduxjs-toolkit-persist/lib/storage/";
import {
   persistReducer,
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
} from "reduxjs-toolkit-persist";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { Reducer } from "redux";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistConfig = {
   key: "root-audiopg",
   storage: storage,
   stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
   cart: cartReducer,
   products: productReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers as Reducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: {
         /* ignore persistance actions */
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
});
