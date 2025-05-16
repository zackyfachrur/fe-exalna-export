
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatLog } from "@type/fetch";
import { fetchUserChatLogs } from "./chatLogicThunk";

interface ChatState {
  chatLogs: ChatLog[];
  selectedChat?: ChatLog;
  loading: boolean;
  error: string;
}

const initialState: ChatState = {
  chatLogs: [],
  loading: false,
  error: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatLogs: (state, action: PayloadAction<ChatLog[]>) => {
      state.chatLogs = action.payload;
    },
    addChatLog: (state, action: PayloadAction<ChatLog>) => {
      state.chatLogs.unshift(action.payload);
    },
    selectChat: (state, action: PayloadAction<ChatLog>) => {
      state.selectedChat = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserChatLogs.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUserChatLogs.fulfilled, (state, action) => {
        state.chatLogs = action.payload;
        state.selectedChat = action.payload[action.payload.length - 1]
        state.loading = false;
      })
      .addCase(fetchUserChatLogs.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setChatLogs, addChatLog, selectChat, setLoading, setError } = chatSlice.actions;
export default chatSlice.reducer;
