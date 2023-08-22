import createSlice from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const { addTransaction } = transactionsSlice.actions;
export const { deleteTransaction } = transactionsSlice.actions;

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducer: {
    addTransaction: (state, action) => {
      return state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state[action.payload.category].filter(transaction => transaction.id == action.payload.id)
    }
  }
})

export default transactionsSlice.reducer;

// const transactionsReducer = (state = initialState, action) => {
//   let newTransactionsForCategory;
//   switch (action.type) {
//     case 'transactions/addTransaction':
//       newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
//       return { ...state, [action.payload.category]: newTransactionsForCategory}
//     case 'transactions/deleteTransaction':
//       const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
//       newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
//       return { ...state, [action.payload.category]: newTransactionsForCategory}
//     default:
//       return state;
//   }
// }