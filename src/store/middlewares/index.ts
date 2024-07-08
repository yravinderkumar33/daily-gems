import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuotes } from "../../services/quote";

export const fetchQuotesThunk = createAsyncThunk('quotes', fetchQuotes);
