import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData :[],
  imageURL: ""
}
export const netflix = createSlice({
  name: 'netflix',
  initialState,
  reducers: {
    setBannerData: (state ,action)=>{
        state.bannerData = action.payload
    },
    setImageURL: (state , action)=>{
        state.imageURL = action.payload
    }
  }
  
})

export const { setBannerData,setImageURL } = netflix.actions;
export default netflix.reducer