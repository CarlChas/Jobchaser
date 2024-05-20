import { configureStore } from '@reduxjs/toolkit';
import someSlice from './someSlice';

const store = configureStore({
  reducer: {
    someSlice,
  },
});

export default store;
