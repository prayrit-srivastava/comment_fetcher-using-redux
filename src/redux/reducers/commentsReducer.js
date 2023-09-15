const { createSlice } = require("@reduxjs/toolkit");

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
    name:"comments",
    initialState:INITIAL_STATE,
    reducers:{
        loading:(state,action)=>{
            state.isLoading = true;
        },
        error:(state,action)=>{

            state.error = "Failed to fetch comments.";
            state.isLoading = false;
        },
        sucess:(state,action)=>{
            state.comments = action.payload;
            state.isLoading = false;
        }
    }
})

export const commentsReducer = commentsSlice.reducer;
export const action = commentsSlice.actions;

export const commentsSelector = (state) => state.commentsReducer;
