import { Link } from 'react-router-dom';
import { useRef } from 'react';
import axiosClient from "../axios-client.js";
import useStateContext from "../context/ContextProvider.jsx";

const Signup = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();

	const { setUser, setToken } = useStateContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			passwordConfirmation: passwordConfirmationRef.current.value
		}
		axiosClient.post('/signup', payload)
			.then(({ data }) => {
				setToken(data.token);
				setUser(data.user);
			})
			.catch(err => {
				const response = err.response;
				if (response && response.status == 422) {
					console.log(response.data.errors);
				}
			})
	}

	return (
		<div className="login-signup-form animated fadeInDown">
			<div className="form">
				<h1 className="title">Create an account</h1>
				<form onSubmit={onSubmit}>
					<input ref={nameRef} type="text" placeholder="Full Name" />
					<input ref={emailRef} type="email" placeholder="Email" />
					<input ref={passwordRef} type="password" placeholder="Password" />
					<input ref={passwordConfirmationRef} type="password" placeholder="Password Conformation" />
					<button className="btn btn-block">Sign up</button>
					<p className="message">
						Already registered? <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Signup