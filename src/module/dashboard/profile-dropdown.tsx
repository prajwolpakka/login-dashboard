import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Row } from "antd";
import MaleAvatar from "asset/placeholder.webp";
import { logout } from "module/auth/slice/action";
import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { properCase } from "util/proper-case";

interface Props {}

export const ProfileDropdown: React.FC<Props> = () => {
	const dispatch = useAppDispatch();

	const handleLogout = () => dispatch(logout());
	const userName = useAppSelector((root) => root.Auth.userName);

	const profileMenuItems: MenuProps["items"] = [
		{ key: "1", label: "Profile", icon: <UserOutlined /> },
		{
			key: "2",
			label: "Logout",
			icon: <LogoutOutlined />,
			onClick: () => handleLogout(),
		},
	];
	return (
		<Dropdown trigger={["hover"]} menu={{ items: profileMenuItems }}>
			<Row justify={"center"} align={"middle"} style={{ cursor: "pointer" }}>
				<>
					<div>{properCase(userName)}</div>
					<Avatar style={{ backgroundColor: "white", height: 30, width: 30, marginLeft: 15 }} src={MaleAvatar} />
				</>
			</Row>
		</Dropdown>
	);
};
