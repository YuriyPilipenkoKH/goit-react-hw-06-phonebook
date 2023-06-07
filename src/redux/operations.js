import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64808ecbf061e6ec4d497e6c.mockapi.io";

 export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );