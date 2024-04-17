import { Navigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

interface Props {
	children: React.ReactNode;
}

const PublicGuard: React.FC<Props> = (props) => {
	const { children } = props;
	const { isAuthenticated } = useAppSelector((state) => state.Auth);

	if (!isAuthenticated) {
		return <>{children}</>;
	} else {
		return <Navigate to="/" />;
	}
};

export default PublicGuard;
