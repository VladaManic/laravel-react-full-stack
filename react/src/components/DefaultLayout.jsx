import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from "../context/ContextProvider.jsx";

const DefaultLayout = () => {
	const { user, token } = useStateContext()

	if (!token) {
		return <Navigate to="/login" />
	}

	return (
		<div className="default-layout">
			<Outlet />
		</div>
	)
}

export default DefaultLayout