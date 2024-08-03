// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userReducer from './slices/usersSlice';
import postReducer from './slices/postsSlice';
import commentReducer from './slices/commentSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postReducer,
        comments: commentReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector as <TSelected>(selector: (state: RootState) => TSelected) => TSelected;
export const useAppDispatch = () => useDispatch<AppDispatch>();
