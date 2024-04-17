import { Card, Col, ConfigProvider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { ViewAllTransaction } from "module/transaction/ui";
import React from "react";
import { AppHeader } from "./header";
import { Sidebar } from "./sidebar";
import { Statistics } from "./statistics";

const Dashboard: React.FC = () => {
	return (
		<ConfigProvider theme={{ components: { Input: { controlHeight: 32 }, Button: { controlHeight: 32 } } }}>
			<Layout style={{ height: "100vh" }}>
				<AppHeader />
				<Layout>
					<Sidebar />
					<Layout style={{ padding: "10px 10px 10px 10px" }}>
						<Content>
							<Card
								styles={{
									body: {
										height: "calc(100vh - 30px - 40px - 32px)",
										overflow: "auto",
										padding: "15px 25px",
										margin: "15px 0",
									},
								}}
							>
								<Typography.Title>Dashboard</Typography.Title>
								<Row gutter={[25, 25]} style={{ marginBottom: 15 }}>
									<Col>
										<Statistics title="Total Users" value={500} isGrowth={true} percent={"15"} />
									</Col>
									<Col>
										<Statistics title="Total Transactions" value={1234567} isGrowth={true} percent={"5"} />
									</Col>
									<Col>
										<Statistics title="New Countries" value={5} isGrowth={false} percent={"2"} />
									</Col>
								</Row>
								<ViewAllTransaction />
							</Card>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};

export default Dashboard;
