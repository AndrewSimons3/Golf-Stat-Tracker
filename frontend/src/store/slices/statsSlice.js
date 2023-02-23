import { createSlice, nanoid } from '@reduxjs/toolkit';

const statsSlice = createSlice({
	name: 'stats',
	initialState: {
		searchTerm: '',
		data: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addScoreEntry(state, action) {
			state.data.push({
				course: action.payload.course,
				score: action.payload.score,
				gir: action.payload.gir,
				upDowns: action.payload.upDowns,
				fairways: action.payload.fairways,
				putts: action.payload.putts,
				id: nanoid(),
			});
		},
		removeScoreEntry(state, action) {
			const filteredScoreEntry = state.data.filter((entry) => {
				return entry.id !== action.payload;
			});
			state.data = filteredScoreEntry;
		},
	},
});



export const { addScoreEntry, removeScoreEntry } = statsSlice.actions;
export const statsReducer = statsSlice.reducer;
