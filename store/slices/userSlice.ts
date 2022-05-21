import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/models/user.model";
import { RootState } from "@/store/store";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

const initialState: UserState = {
  username: "aaa",
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action) => {
      state.username = action.payload.newUsername;
    },
  },
  extraReducers: (builder) => {
    //async
  },
});

//ให้คนอื่นเรียกใช้ ตัว func ภายในได้
export const { resetUsername } = userSlice.actions;

// export common user selector
//shortcut   ==> const userSelector = useSelector((store: any) => store.user);
export const userSelector = (store: RootState) => store.user;
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated;

// // export reducer
export default userSlice.reducer;
