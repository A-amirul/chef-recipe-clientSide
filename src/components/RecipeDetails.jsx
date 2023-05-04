import React from 'react';
import { Card } from 'react-daisyui';
import { FaThumbsUp } from "react-icons/fa";
import RecipeCard from './RecipeCard';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
	const { name, likes, bio, picture, recipes,  experience_years } = useLoaderData();
	
	return (
		<div className='grid md:grid-cols-2 ms-2'>
			<div className="m-8">
				<Card  className='bg-gray-100 shadow-lg h-50'>
					<Card.Image className='ms-4 w-96 rounded-lg mt-4'
						src={picture}
						alt="chef"
					/>
					<Card.Body>
						<Card.Title tag="h2">{name}</Card.Title>
						<p>{bio}</p>
						<p>Number of Recipes: {recipes?.length}</p>
						<p>Experience: {experience_years
						} Years </p>
						<p className='flex items-center gap-x-2'>{likes}<FaThumbsUp className='text-blue-600'></FaThumbsUp></p>
						
					</Card.Body>
				</Card>
			</div>
			<div className='w-50 gap-x-4'>
				{
					recipes?.map(recipe => <RecipeCard
					 recipe={recipe}
					></RecipeCard>)
			   }
			</div>
		</div>
	)

};

export default RecipeDetails;