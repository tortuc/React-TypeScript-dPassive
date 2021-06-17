import type { RootState } from "../../redux"

export const globalSelector = (state: RootState) => state.global
export const navStateSelector = (state: RootState) => state.global.navState
