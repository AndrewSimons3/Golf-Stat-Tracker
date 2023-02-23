import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeScoreEntry } from '../store';

function StatsList() {
	const dispatch = useDispatch();

	const { stats, course } = useSelector(
		({ form, stats: { data, searchTerm } }) => {
			const filteredStats = data.filter((stat) =>
				stat.course.toLowerCase().includes(searchTerm.toLowerCase())
			);

			return {
				stats: filteredStats,
				course: form.course,
			};
		}
	);

	const handleStatDelete = (stat) => {
		dispatch(removeScoreEntry(stat.id));
	};

  const renderedStats = stats.map((stat) => {
		const bold = course && stat.name.toLowerCase().includes(course.toLowerCase());

		return (
			<div key={stat.id} className={`panel ${bold && 'bold'}`}>
				<p>
					{stat.name} - ${stat.cost}
				</p>
				<button
					className='button is-danger'
					onClick={() => handleStatDelete(stat)}
				>
					Delete
				</button>
			</div>
		);
	});

	return <div>{renderedStats}</div>;
}

export default StatsList;
