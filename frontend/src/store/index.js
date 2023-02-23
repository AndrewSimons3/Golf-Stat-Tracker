import { configureStore } from '@reduxjs/toolkit';
import {
	statsReducer,
	addScoreEntry,
	removeScoreEntry,
} from './slices/statsSlice';
import {
	formReducer,
	changeCourse,
	changeScore,
	changeGirs,
	changeUpDowns,
	changeFairways,
	changePutts,
	changeNotes,
} from './slices/formSlice';

const store = configureStore({
	reducer: {
		form: formReducer,
		stats: statsReducer,
	},
});

export {
	store,
	addScoreEntry,
	removeScoreEntry,
	changeCourse,
	changeScore,
	changeGirs,
	changeUpDowns,
	changeFairways,
	changePutts,
	changeNotes,
};
