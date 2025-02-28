import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';

export interface authState {
    isFirstTime: boolean;
}

const initialState: authState = {
    isFirstTime: true,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsFirstTime: (state, action: PayloadAction<any>) => {
      state.isFirstTime = action.payload
      },
     
  },
})

export const {setIsFirstTime } = appSlice.actions


export default appSlice.reducer