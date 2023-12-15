import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  entities: [],
  loading: false,
  value: 10,
} as any;

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async (thunkapi) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(...action.payload);
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
