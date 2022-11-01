import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const transitory = { ...action.payload, values: {} };
      const arr = [...state.items];
      arr.push(transitory);

      /* { id: uuid(), layout: "string" } */
      state.currentlyEdited = transitory;
      state.items = arr;
    },
    updateComponent: (state, action) => {
      /*{
        id: "e00ce72c-2018-4485-a644-f1176287ab86",
        data: {
          values: { text: "Some Different Header" },
        }*/
      state.currentlyEdited = null;
      state.items = state.items.map((i) =>
        i.id === action.payload.id ? { ...i, ...action.payload.data } : i
      );
    },
    removeComponent: (state, action) => {
      state.currentlyEdited = null;
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    setEditedComponent: (state, action) => {
      state.currentlyEdited = action.payload.component;
    },
  },
});

export const componentsActions = componentsSlice.actions;
export const componentsReducer = componentsSlice.reducer;
