import { Row } from "antd";
import { Header } from "antd/es/layout/layout";
import Logo from "asset/logo.png";
import React from "react";
import { ProfileDropdown } from "./profile-dropdown";

interface Props {}

export const AppHeader: React.FC<Props> = () => {
	return (
		<Header
			style={{ display: "flex", alignItems: "center", backgroundColor: "#2e3754", color: "white", padding: "0 24px" }}
		>
			<Row style={{ width: "100vw" }} justify={"space-between"} align={"middle"}>
				<Row justify={"center"} align={"middle"}>
					<img src={Logo} style={{ height: 25, width: 25 }} />
					UI Test
				</Row>
				<ProfileDropdown />
			</Row>
		</Header>
	);
};
