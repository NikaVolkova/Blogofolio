import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./reducers/themeSlice";
import postReducer, { postName } from "./reducers/postSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;