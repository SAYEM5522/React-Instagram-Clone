import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: null,
    chatName:null,
    chatImage:null
   
  },

  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
      state.chatImage=action.payload.chatImage;
    },
  },
});

export const { setChat} = chatSlice.actions;
export const selectchatId = (state) => state.chat.chatId;
export const selectchatName = (state) => state.chat.chatName;
export const selectchatImage=(state)=>state.chat.chatImage;

export default chatSlice.reducer;