import React from 'react';
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ChefInfo = ({ chef }) => {
	return (
		<div>
			<div className="card lg:card-side bg-base-100 shadow-xl">
				<figure><img src={chef.picture} alt="Album" /></figure>
				<div className="card-body">

					<h2 className="card-title">{chef?.name}</h2>
					<p>Experience: {chef.experience_years
					} Years </p>
					<p>Number of Recipes: {chef.recipes.length}</p>
					{
						chef.recipes.map(recipe => <li>{recipe.name}</li>)
					}
					<div >
						<p className='flex items-center gap-x-2'>{chef.likes}<FaHeart></FaHeart></p>
						
					</div>
					<div className="card-actions justify-end">
						<NavLink to={`/chefs/:${chef.id}`}><button className="btn btn-primary">View Recipes </button></NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefInfo;