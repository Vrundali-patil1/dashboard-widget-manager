import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'cat1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'w1', name: 'Widget 1', text: 'Some random data' },
        { id: 'w2', name: 'Widget 2', text: 'Another info' },
      ],
    },
    {
      id: 'cat2',
      name: 'Network Dashboard',
      widgets: [],
    },
  ],
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;