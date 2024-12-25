// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import { counterReducer } from './reducers/CounterSlice';
import { registerFormReducer } from './reducers/RegisterFormSlice';

const persistConfig = {
  key: 'root',
  storage,
  'blacklist': ['registerForm']
};

const rootReducer = combineReducers({
  counter: counterReducer,
  registerForm: registerFormReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
    
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;