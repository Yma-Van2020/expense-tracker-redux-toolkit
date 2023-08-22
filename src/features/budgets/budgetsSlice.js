import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducer: {
    editBudget:(state, action) => {
      const { category, amount } = action.payload;
      return state.map(budget => {
        if(budget.category == category){
          return amount;
        }
        return budget;
      })
    }
  }
});

export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
export const selectBudgets = (state) => state.budgets;
