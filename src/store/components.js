import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log(state)
      const transitory = {
          ...action.payload,
          values:{},
        }
      state.currentlyEdited = transitory
      state.items= state.items.push(transitory)
    },
    updateComponent: (state, action) => {
    },
    removeComponent: (state, action) => {
    },
    setEditedComponent: (state, action) => {
    },
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer
