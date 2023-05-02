import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';




const Login = () => {
	const [user, setUser] = useState([]);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const loggedUser = result.user;
				setUser(loggedUser);
			})
			.catch(error => {
			console.log('error',error.message);
		})
	}

	return (
		<div>
			<h2>Username:{user?.displayName}</h2>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col">
					<h2 className='text-2xl font-bold'>Please Login</h2>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body px-16">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="text" name='email' placeholder="email" className="input input-bordered required" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="text" name='password' placeholder="password" className="input input-bordered" />
								<label className="label">
									<div>Are you new user? <NavLink to="/register">Register</NavLink></div>
								</label>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
						</div>
					</div>

					<div onClick={handleGoogleSignIn} className='flex justify-center items-center shadow-lg px-28 py-3 rounded-lg hover:bg-slate-300 bg-gray-100 font-bold'>
						<FaGoogle></FaGoogle>	Login with google
					</div>
					<div  className='flex justify-center items-center shadow-lg px-28 py-3 rounded-lg hover:bg-slate-300 bg-gray-100 font-bold'>
						<FaGithub></FaGithub>	Login with GitHub
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;