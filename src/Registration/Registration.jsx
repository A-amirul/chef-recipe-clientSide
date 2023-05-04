import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Registration = () => {
	const { createUser } = useContext(AuthContext);
	const [error, setError] = useState('');

	const handleRegister = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		 if (password?.length < 6) {
			 setError("Password must be at least 6 characters");
		}
		 else {
			 setError("successful Registration");
		}


		console.log(name, photo, password, email);
		createUser(email, password)
			.then(result => {
				const createdUser = result.user;
				console.log(createdUser);
			})
			.catch(error => {
				console.log(error);
			})
	}

	
	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col ">
					<h2 className='text-2xl font-bold'>Please Registration</h2>
                  <form onSubmit={handleRegister}>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body px-16">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your Name</span>
								</label>
									<input type="text" name='name' placeholder="your name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
									<input type="email" name='email' placeholder="email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
									<input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
									<input type="password" name='password' placeholder="password" className="input input-bordered" required />
									{error && (
										<p className="text-red-500 text-xs italic">{error}</p>
									)}

								<label className="label">
									<div>Already have an account? <NavLink to="/login">Login</NavLink></div>
								</label>
								
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Registration</button>
							</div>
						</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;