import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addScoreEntry,
	changeCourse,
	changeScore,
	changeFairways,
	changeGirs,
	changePutts,
	changeUpDowns,
	changeNotes,
} from '../store';

function StatsForm() {
	const dispatch = useDispatch();

	const { course, score, girs, upDowns, fairways, putts, notes } = useSelector(
		(state) => {
			return {
				course: state.form.course,
				score: state.form.score,
				girs: state.form.girs,
				upDowns: state.form.upDowns,
				fairways: state.form.fairways,
				putts: state.form.putts,
				notes: state.form.notes,
      };
		}
	);

	const handleCourseChange = (event) => {
		dispatch(changeCourse(event.target.value));
	};

	const handleScoreChange = (event) => {
		dispatch(changeScore(event.target.value));
	};

	const handleGirChange = (event) => {
		dispatch(changeGirs(event.target.value));
	};

	const handleFairwaysChange = (event) => {
		dispatch(changeFairways(event.target.value));
	};

	const handleUpDownsChange = (event) => {
		dispatch(changeUpDowns(event.target.value));
	};

	const handlePuttsChange = (event) => {
		dispatch(changePutts(event.target.value));
	};

	const handleNotesChange = (event) => {
		dispatch(changeNotes(event.target.value));
	};

	const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted")
		dispatch(
			addScoreEntry({
				course,
				score,
				girs,
				fairways,
				putts,
				upDowns,
				notes,
			})
		);
	};

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<h1 className='text-4xl'>Enter a Score!</h1>
			<form
				onSubmit={handleSubmit}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2'
			>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Golf Course
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							value={course}
							onChange={handleCourseChange}
						/>
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Score
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='number'
							value={score}
							onChange={handleScoreChange}
						/>
					</div>
					{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
				</div>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Greens in Regulation
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='number'
							value={girs}
							onChange={handleGirChange}
						/>
						{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Up & Downs
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='number'
							value={upDowns}
							onChange={handleUpDownsChange}
						/>
					</div>
					{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
				</div>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Fairways hit
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='number'
							value={fairways}
							onChange={handleFairwaysChange}
						/>
						{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label className='block text-gray-700 text-sm font-bold mb-1'>
							Total Putts
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='number'
							value={putts}
							onChange={handlePuttsChange}
						/>
						{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
					</div>
				</div>
				<div className='mb-2'>
					<label className='block text-gray-700 text-sm font-bold mb-1'>
						Notes / Comments
					</label>
					<textarea
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						cols='5'
						rows='5'
						value={notes}
						onChange={handleNotesChange}
					/>
					{/* <p class="text-red-500 text-xs italic">Please enter your score.</p> */}
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default StatsForm;
