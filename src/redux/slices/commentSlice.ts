import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from '../../models/IComment';
import { commentService } from '../../services/api.service';
import { AxiosError } from 'axios';

interface CommentState {
    comments: IComment[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentState = {
    comments: [],
    loading: false,
    error: null,
};

export const fetchCommentsByPostId = createAsyncThunk(
    'commentSlice/fetchCommentsByPostId',
    async (postId: number, thunkAPI) => {
        try {
            let response = await commentService.getAllByPostId(postId);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByPostId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchCommentsByPostId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export default commentSlice.reducer;
