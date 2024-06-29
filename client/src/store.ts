import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { api } from './services/api';
import { authReducer } from './features/auth/authSlice';
import { codeReducer } from './features/code/codeSlice';
import { progressBarReducer } from './features/progress-bar/progressBarSlice';
import { productReducer } from './features/product/productSlice';
import { dashboardReducer } from './features/dashboard/dashboardSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['auth'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
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

export const useAppDispatch: () => AppDispatch = useDispatch;
