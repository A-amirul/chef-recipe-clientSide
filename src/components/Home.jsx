import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefInfo from './ChefInfo';


const Home = () => {
	const data = useLoaderData();

	return (
		<div>
			<div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.ibb.co/HDd2K4M/chef.jpg')" }}>
				
				<div className="hero min-h-screen">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div>
							<h1 className="text-5xl py-8 font-bold">Know About ChefCorner!</h1>
							<p className="py-4 text-lg lg:me-96 lg:pe-72">ChefCorner is a platform that connects talented chefs with customers who are looking for professional cooking services. The platform was created to make it easier for people to find and hire chefs for a variety of occasions, such as private dinners, corporate events, or even regular meal preparation.Customers can enjoy delicious meals prepared by professional chefs in the comfort of their own home.</p>
							<button className="btn btn-primary">Let's Enjoy!!</button>
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

		</div>
	);
};

export default Home;