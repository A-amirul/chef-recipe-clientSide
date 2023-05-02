import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
	return (
		<div>
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
				</div>
			</div>
		</div>
	);
};

export default Login;