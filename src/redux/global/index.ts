import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GlobalState } from "./type"

const initialState: GlobalState = {
  navState: true,
}

const globalSlice = createSlice({
  name: "Global",
  initialState: initialState,
  reducers: {
    updateNavState(state: GlobalState, action: PayloadAction<boolean>) {
      state.navState = action.payload
    },
  },
})

const { actions, reducer } = globalSlice

export default reducer
export const { updateNavState } = actions
