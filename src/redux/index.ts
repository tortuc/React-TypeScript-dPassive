import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "./global"

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
