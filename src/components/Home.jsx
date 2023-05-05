import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefInfo from './ChefInfo';
import { AuthContext } from '../providers/AuthProvider';
import { Circles } from 'react-loader-spinner';


const Home = () => {
	const data = useLoaderData();
	const { loading } = useContext(AuthContext);
	if (loading) {
		return <Circles
			height="80"
			width="80"
			color="#4fa94d"
			ariaLabel="circles-loading"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	}

	return (
		<div>
			<div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.ibb.co/HDd2K4M/chef.jpg')" }}>

				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div>
							<h1 className="text-5xl py-8 font-bold">Know About ChefCorner!</h1>
							<p className="py-4 text-lg lg:me-96 lg:pe-72">ChefCorner is a platform that connects talented chefs with customers who are looking for professional cooking services. The platform was created to make it easier for people to find and hire chefs for a variety of occasions, such as private dinners, corporate events, or even regular meal preparation.Customers can enjoy delicious meals prepared by professional chefs in the comfort of their own home.</p>
							<button className="btn btn-primary">Let's Hire!!</button>
						</div>
					</div>
				</div>
			</div>

			<h2 className='text-4xl font-semibold text-center mt-12'>Choose & Hire your Chef</h2>
			<div className='grid md:grid-cols-2 md:px-28 py-8 gap-10'>

				{
					data?.map(chef =>

						<ChefInfo

							key={chef.id}
							chef={chef}
						></ChefInfo>
					)
				}
			</div>


			<div className="section">
				<div className="flex flex-col items-center">
					<div className="text-3xl text-center font-bold my-16 md:px-10">
						Most selling Recipe
					</div>
					<div className="grid  md:grid-cols-2 gap-8 mb-16">


						<div
							className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"

						>
							<img src='https://i.ibb.co/HBdDMyv/food2.jpg' alt="" className="rounded-lg mb-4 w-96 mx-auto" />
							<div className="flex justify-between mb-4">
								<div className="md:text-xl text-[1rem] font-semibold">

								</div>

							</div>
							<h2 className='text-2xl font-bold py-4'>Spaghetti Bolognese</h2>
							<p className="text-[0.85rem] opacity-70 mb-4">
								Spaghetti Bolognese, also known as spaghetti with meat sauce, is a classic Italian dish that has become popular around the world. The dish consists of spaghetti noodles served with a tomato-based meat sauce.
								To make spaghetti Bolognese, ground beef is typically browned in a large pot with onions, garlic, and other seasonings. Then, canned or fresh tomatoes are added along with tomato paste, herbs, and spices. The sauce is then simmered for a period of time to allow the flavors to meld together.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-xl font-semibold"> </span>
								<span className="cursor-pointer p-3 btn">Add to Cart</span>
							</div>
						</div>
						<div
							className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"

						>
							<img src='https://i.ibb.co/L9W4fCW/food6.jpg' alt="" className="rounded-lg mb-4 w-96 mx-auto" />
							<div className="flex justify-between mb-4">
								<div className="md:text-xl text-[1rem] font-semibold">

								</div>

							</div>
							<h2 className='text-2xl font-bold py-4'>Beef Stroganoff</h2>
							<p className="text-[0.85rem] opacity-70 mb-4">
								While Classic Beef Stroganoff is a comforting and satisfying dish, it can also be adapted to suit different dietary preferences. Additionally, gluten-free noodles can be used to make the dish suitable for those with gluten sensitivities.Once the sauce is ready, the cooked egg noodles or rice are added to the skillet and tossed with the beef and sauce. The dish can be garnished with chopped parsley, chives, or other herbs to add extra flavor and freshness.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-xl font-semibold"> </span>
								<span className="cursor-pointer p-3 btn">Add to Cart</span>
							</div>
						</div>
						<div
							className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"

						>
							<img src='https://i.ibb.co/0s5rvMw/food7.jpg' alt="" className="rounded-lg mb-4 w-96 mx-auto" />
							<div className="flex justify-between mb-4">
								<div className="md:text-xl text-[1rem] font-semibold">

								</div>

							</div>
							<h2 className='text-2xl font-bold py-8'>Roast chicken</h2>
							<p className="text-[0.85rem] opacity-70 mb-4">
								Roast chicken is a classic dish that is popular around the world. It is a simple yet flavorful way to cook chicken, and can be served as a main dish for dinner or as part of a larger meal.
								To make roast chicken, a whole chicken is typically seasoned with salt, pepper, and other herbs and spices such as rosemary, thyme, or garlic. The chicken is then placed in a roasting pan and roasted in the oven until it is cooked through and the skin is crispy and golden brown.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-xl font-semibold"> </span>
								<span className="cursor-pointer p-3 btn">Add to Cart</span>
							</div>
						</div>
						<div
							className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"

						>
							<img src='https://i.ibb.co/SrvkZk2/food.jpg' alt="" className="rounded-lg mb-4 w-96 mx-auto" />
							<div className="flex justify-between mb-4">
								<div className="md:text-xl text-[1rem] font-semibold">

								</div>

							</div>
							<h2 className='text-2xl font-bold py-4'>French fries</h2>
							<p className="text-[0.85rem] opacity-70 mb-4">
								Today, French fries are a ubiquitous part of fast food culture and are often served with ketchup, mayonnaise, or other sauces. They are also commonly seasoned with salt, pepper, or other spices.
								While French fries can be a tasty treat, they are also high in calories, sodium, and unhealthy fats when consumed in large amounts. Moderation is key when it comes to enjoying this classic fast food item.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-xl font-semibold"> </span>
								<span className="cursor-pointer p-3 btn">Add to Cart</span>
							</div>
						</div>


					</div>

				</div>
			</div>


			<h1 className="text-5xl font-bold py-5 text-center bg-gray-200">Our Clients</h1>

			<p className='text-center pb-8 bg-gray-200'>Our working pictures with real cooking panel. Delicious food items make it more spicy by the glimpse only.</p>
			<div className='bg-gray-200 p-8'>

				<div className='grid mx-auto md:grid-cols-4 gap-4'>
					<img className='img-fluid mx-auto' src="https://i.ibb.co/GQVmHPv/download.jpg" alt="" />
					<img className='img-fluid mx-auto' src="https://i.ibb.co/7vgbhpC/3.jpg" alt="" />
					<img className='img-fluid mx-auto' src="https://i.ibb.co/170YVq0/4.png" alt="" />
					<img className='img-fluid mx-auto' src="https://i.ibb.co/48z79FL/5.jpg" alt="" />
				</div>



			</div>

		</div>
	);
};

export default Home;