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

interface ReserUsernameProp {
  data: string;
}

interface SignInAction {
  username: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "user/signup",
  async (credential: SignInAction) => {
    const p1 = new Promise((res) =>
      setTimeout(() => res({ result: "success" }), 3000)
    );
    return await p1;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: PayloadAction<ReserUsernameProp>) => {
      state.username = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    //async
    builder.addCase(signUp.fulfilled, (state, action: any) => {
      state.username = action.payload.result;
    });
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
