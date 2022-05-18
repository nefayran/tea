import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import itemsReducer from './items/itemsReducer';

const rootReducer = combineReducers({
  itemsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
//   applyMiddleware(thunk),
//   preloadedState,
});

export default store;
