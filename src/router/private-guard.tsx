import { Navigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

interface Props {
	children: React.ReactNode;
}

const PrivateGuard: React.FC<Props> = (props) => {
	const { children } = props;
	const { isAuthenticated } = useAppSelector((rootState) => rootState.Auth);

	if (isAuthenticated) return <>{children}</>;
	else return <Navigate to="/login" />;
};

export default PrivateGuard;
