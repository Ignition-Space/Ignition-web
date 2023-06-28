import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: '@@lgnition-space',
  initialState: {
    test: 1
  } as Record<string, any>,
  reducers: {
    onUpdated: (state, { payload = {} }) => {
      return {
        ...state,
        ...payload
      }
    }
  }
})

export const { onUpdated } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})