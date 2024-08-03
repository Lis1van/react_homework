// redux/slices/postSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '../../models/IPost';
import { postService } from '../../services/api.service';
import { AxiosError } from 'axios';

interface PostState {
    posts: IPost[];
    loading: boolean;
    error: string | null;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk(
    'postSlice/fetchPosts',
    async (_, thunkAPI) => {
        try {
            let response = await postService.getAll();
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export default postSlice.reducer;
