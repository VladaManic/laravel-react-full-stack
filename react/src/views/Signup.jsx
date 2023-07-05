import { Link } from 'react-router-dom';

const Signup = () => {
	const onSubmit = (e) => {
		e.preventdefault();
	}

	return (
		<div className="login-signup-form animated fadeInDown">
			<div className="form">
				<h1 className="title">Create an account</h1>
				<form onSubmit={onSubmit}>
					<input type="text" placeholder="Full Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Password Conformation" />
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