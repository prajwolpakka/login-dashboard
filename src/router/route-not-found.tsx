import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const RouteNotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Result
			status="404"
			title="Error 404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={() => navigate("/")}>
					Back Home
				</Button>
			}
		/>
	);
};

export default RouteNotFound;
