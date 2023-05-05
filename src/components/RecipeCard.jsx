import React, { useState } from 'react';
import { Card} from 'react-daisyui';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
	const [isDisabled, setIsDisabled] = useState(false);
	
	const handleClick = () => {
		toast.success('Successfully added as favorite!');
	};

	const handleFavorite = () => {
		handleClick();
		setIsDisabled(true);


	}



	return (
		<div className=' ms-2'>
			<div className="m-8">
				<Card side="lg" h-50 className='bg-gray-100 shadow-lg'>
					<Card.Body>
						<Card.Title tag="h2">{recipe.name}</Card.Title>
						<p>Ingredients:</p>
						<div>
							{
								recipe?.ingredients?.map(ingredient => <li>{ingredient}</li>)
							}
						</div>
						<p>Cooking Methods:</p>
						<p>{recipe?.method

						} </p>

						<div className='flex items-center'>
							<Rating
								placeholderRating={recipe?.rating}
								readonly
								emptySymbol={<FaRegStar></FaRegStar>}
								placeholderSymbol={<FaStar className='text-amber-500'></FaStar>}
								fullSymbol={<FaStar></FaStar>}
							></Rating>
							<p className='ms-2 font-bold'> {recipe?.rating}</p>
						</div>
						<Card.Actions className="justify-end">

							<ToastContainer />
								<button onClick={handleFavorite} className={`bg-blue-500 text-white py-2 px-4 rounded ${isDisabled ? 'disabled opacity-50 cursor-not-allowed' : ''}`}>Favorites </button>
								
						
						</Card.Actions>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default RecipeCard;