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

			{/* <div>
				<div className="grid md:grid-cols-2 bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img src="https://i.ibb.co/pb0Xp9F/food.jpg" className="max-w-sm rounded-lg shadow-2xl" />
						<div>
							<h1 className="text-5xl font-bold">About Services of ChefCorner</h1>
							<p className="w-50">ChefCorner provide expert Chefs/Cooks for Kathi Rolls, Shawarma, Tandoor, Alfam, Berger, Pizza, Sandwich, Momos. We also provide our service for Cakes and Sweets.</p>
							<li>We provide highly efficient and experienced chefs who can work under the demanding environment.</li>
							<li> Tell your favorite and sit back and let the chef do his magic with specifications.</li>
							<li>Available Chefs/Cooks for Fine Dining on requirements, expertise to design fancy menus as and when required.</li>
							<li>Providing trained domestic cooks for your home. Their skills can be fine tuned as per your requirement.</li>
						</div>
					</div>
				</div>
			</div> */}


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