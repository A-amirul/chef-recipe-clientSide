import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ChefInfo from '../components/ChefInfo';

const Main = () => {
	return (
		<div>
			<Header></Header>

			<div className='min-h-[calc(100vh-300px)]'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;