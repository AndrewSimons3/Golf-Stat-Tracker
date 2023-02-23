import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
		<div>
			<ul className='flex gap-x-4'>
        <Link to='/'>Home</Link>
        <Link to='enterscore'>Enter a Score</Link>
				<Link to='yourstats'>Your Stats</Link>
				<Link to='getbetter'>Get Better</Link>
			</ul>
		</div>
	);
}

export default Navigation;