import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from "../context/ContextProvider.jsx";

const GuestLayout = () => {
	const { token } = useStateContext()

	if (token) {
		return <Navigate to="/" />
	}

	return (
		<div className="guest-layout">
			<Outlet />
		</div>
	)
}

export default GuestLayout