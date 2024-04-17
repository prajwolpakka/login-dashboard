import { Alert, Button, Card, Checkbox, Col, Form, Input, Row, Spin, Typography } from "antd";
import loginImage from "asset/worldImage.svg";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { LoginProps, login } from "../slice/action";

const { Title } = Typography;

const Login = () => {
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector((state) => state.Auth.loading);
	const isError = useAppSelector((state) => state.Auth.error);

	const onFinish = (values: LoginProps) => dispatch(login(values));

	return (
		<div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Card style={{ width: "65%", padding: 25, boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)" }}>
				<Row gutter={50}>
					<Col xs={24} md={14}>
						<Title level={2} style={{ color: "#27276e", marginBottom: 25 }}>
							Login
						</Title>
						{isError && <Alert message={isError} type="error" style={{ marginBottom: 15 }} />}
						<Spin spinning={isLoading}>
							<Form
								name="login-form"
								layout="vertical"
								requiredMark={false}
								initialValues={{ login_id: "mausam07@yopmail.com", login_password: "Test@1234" }}
								onFinish={onFinish}
								className="login-form"
							>
								<Form.Item label="Username" name="login_id" rules={[{ required: true, message: "" }]}>
									<Input placeholder="jackbauyer@email.com" />
								</Form.Item>
								<Form.Item label="Password" name="login_password" rules={[{ required: true, message: "" }]}>
									<Input.Password />
								</Form.Item>

								<Row justify={"space-between"} style={{ marginBottom: 25 }}>
									<Form.Item noStyle>
										<Checkbox>Remember me</Checkbox>
									</Form.Item>

									<Typography.Link>Forgot Password ?</Typography.Link>
								</Row>

								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
										className="login-button"
										style={{ width: "100%" }}
										disabled={isLoading}
									>
										{isLoading ? "Logging in..." : "Login"}
									</Button>
								</Form.Item>
							</Form>
						</Spin>
					</Col>
					<Col xs={0} md={10}>
						<Row justify={"center"}>
							<img src={loginImage} style={{ width: "100%", padding: "65px 0" }} />
						</Row>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Login;
