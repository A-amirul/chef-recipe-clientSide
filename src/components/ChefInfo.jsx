import React from 'react';
import { Button, Card } from 'react-daisyui';
import { FaThumbsUp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ChefInfo = ({ chef }) => {
	return (
		<div>
			<div className="mb-3">
			</div>
			<Card side="lg" className='bg-gray-100 shadow-lg h-full'>
				<Card.Image className='ms-4 h-full w-96'
					src={chef.picture}
					alt="chef"
				/>
				<Card.Body>
					<Card.Title tag="h2">{chef.name}</Card.Title>
					<p>{chef.bio}</p>
					<p>Number of Recipes: {chef?.recipes?.length}</p>
					<p>Experience: {chef.experience_years
					} Years </p>
					<p className='flex items-center gap-x-2'>{chef.likes}<FaThumbsUp className='text-blue-500'></FaThumbsUp></p>
					<Card.Actions className="justify-end">
						<NavLink to={`/chefs/${chef.id}`}><button className="btn btn-primary">View Recipes </button></NavLink>
					</Card.Actions>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ChefInfo;