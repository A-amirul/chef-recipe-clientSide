import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col ">
					<h2 className='text-2xl font-bold'>Please Registration</h2>

					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body px-16">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your Name</span>
								</label>
								<input type="text" name='name' placeholder="your name" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name='email' placeholder="email" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" name='url' placeholder="Photo URL" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name='password' placeholder="password" className="input input-bordered" />
								<label className="label">
									<div>Already have an account? <NavLink to="/login">Login</NavLink></div>
								</label>
								
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Registration</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;