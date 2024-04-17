import { BuildOutlined, HomeFilled } from "@ant-design/icons";
import { Menu, MenuProps, Tooltip } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
	const navigate = useNavigate();

	const sidebarItems: MenuProps["items"] = [
		{ key: "/", icon: <HomeFilled />, label: "Dashboard", onClick: () => navigate("/") },
		{
			key: "/transaction",
			icon: <BuildOutlined />,
			label: (
				<Tooltip title="Route Not Implemented" placement="right">
					Transaction
				</Tooltip>
			),
		},
	];
	const location = useLocation();

	return (
		<Sider width={200} style={{ height: "100%", borderRight: "2px solid #f0f0f0" }}>
			<Menu
				mode="inline"
				selectedKeys={[location.pathname]}
				defaultSelectedKeys={["dashboard"]}
				style={{ height: "100%", borderRight: 0 }}
				items={sidebarItems}
			/>
		</Sider>
	);
};
