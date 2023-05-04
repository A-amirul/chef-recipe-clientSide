import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();


const Login = () => {
	const [error, setError] = useState('');
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const location = useLocation();
	console.log('login page location', location);
	const from = location.state?.from?.pathname || '/';

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		
		signIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true })
			})
			.catch(error => {
			  setError(error.message);
			})
	}

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true })
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const handleResetPassword = () => {
		sendPasswordResetEmail(auth, email)
			.then(() => { })
			.catch((err) => {
				console.log(err.message);
			});
	};

	

	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col">
					<h2 className='text-2xl font-bold'>Please Login</h2>
					<form onSubmit={handleLogin}>
					<div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body px-16">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
									<input type="email" name='email' placeholder="email" className="input input-bordered required" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
									<input type="password" name='password' placeholder="password" className="input input-bordered" required />
									<p><small>{error}</small></p>
								<label className="label">
									<div>Are you new user? <NavLink to="/register">Register</NavLink></div>
								</label>
								<label className="label">
										<NavLink onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</NavLink>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
						</div>
						</div>
					</form>

					<div onClick={handleGoogleSignIn} className='flex justify-center items-center shadow-lg  px-28 py-3 rounded-lg hover:bg-slate-300  font-bold'>
						<FaGoogle></FaGoogle>	Login with google
					</div>
					<div className='flex justify-center items-center shadow-lg px-28 py-3 rounded-lg hover:bg-slate-300  font-bold'>
						<FaGithub></FaGithub>	Login with GitHub
					</div>
				</div>
			</div>
		</div>
	);
};

	export default Login;