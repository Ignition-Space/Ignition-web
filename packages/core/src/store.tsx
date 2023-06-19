import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: '@@lgnition-space',
  initialState: {
    test: 1
  } as Record<string, any>,
  reducers: {
    onUpdated: (state, { payload = {} }) => {
      console.log(state, payload, 'onUpdated')
      // eslint-disable-next-line no-param-reassign
      return state = {
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