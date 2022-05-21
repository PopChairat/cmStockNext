import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/models/user.model";
import { RootState } from "@/store/store";
import * as serverService from "@/services/serverService";

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

interface SignAction {
  username: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "user/signup",
  async (credential: SignAction) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);

export const signIn = createAsyncThunk(
  "user/signin",
  async (credential: SignAction) => {
    const p1 = new Promise((res) =>
      setTimeout(() => res({ result: "signin success" }), 3000)
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
      state.accessToken = "";
      state.user = undefined;
      state.isAuthenticated = false;
    });
    builder.addCase(signIn.fulfilled, (state, action: any) => {
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
