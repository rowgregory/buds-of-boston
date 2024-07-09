import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from './services/api';
import { authReducer } from './features/auth/authSlice';
import { codeReducer } from './features/code/codeSlice';
import { progressBarReducer } from './features/progress-bar/progressBarSlice';
import { productReducer } from './features/product/productSlice';
import { dashboardReducer } from './features/dashboard/dashboardSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage,
      blacklist: ['success'], // do not persist 'success' within 'auth'
    },
    authReducer
  ),
  code: codeReducer,
  progressBar: progressBarReducer,
  product: productReducer,
  dashboard: dashboardReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(
      api.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;
