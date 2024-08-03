import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.service";

interface UserState {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk(
    'userSlice/fetchUsers',
    async (_, thunkAPI) => {
        try {
            let response = await userService.getAll();
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export default usersSlice.reducer;
