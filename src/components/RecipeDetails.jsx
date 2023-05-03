import React from 'react';
import { Button, Card } from 'react-daisyui';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
	const {name,bio,picture} = useLoaderData();
	
	return (
		<div>
			<div className="mb-3">
				
			</div>
			<Card side="2xl">
				<Card.Image className=''
					src={picture}
					alt="Shoes"
				/>
				<Card.Body>
					<Card.Title tag="h2">{name}</Card.Title>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					
				</Card.Body>
			</Card>
		</div>
	)

};

export default RecipeDetails;