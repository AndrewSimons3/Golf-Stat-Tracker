import { createSlice } from '@reduxjs/toolkit';
import { addScoreEntry } from './statsSlice';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		course: '',
    score: 0,
    girs: 0,
    upDowns: 0,
    fairways: 0,
    putts: 0,
    notes: ''
	},
	reducers: {
    changeCourse(state, action) {
      state.course = action.payload;
    },
		changeScore(state, action) {
      state.score = action.payload;
    },
    changeGirs(state, action) {
      state.girs = action.payload
    },
    changeUpDowns(state, action) {
      state.upDowns = action.payload
    },
    changeFairways(state, action) {
      state.fairways = action.payload
    },
    changePutts(state, action) {
      state.putts = action.payload
    },
		changeNotes(state, action) {
      state.notes = action.payload
    },
	},
	extraReducers(builder) {
	  builder.addCase(addScoreEntry, (state, action) => {
      state.course = '';
      state.score = 0;
      state.girs = 0;
      state.upDowns = 0;
      state.fairways = 0;
      state.putts = 0;
      state.notes = '';
	  })
	}
});


export const { changeCourse, changeScore, changeGirs, changeUpDowns, changeFairways, changePutts, changeNotes } = formSlice.actions;
export const formReducer = formSlice.reducer;
