import { Tag } from "antd";
import React from "react";

interface Props {
	status: string;
}

export const StatusTag: React.FC<Props> = ({ status }) => {
	let color = "";
	switch (status) {
		case "Authorized":
			color = "blue";
			break;

		case "Parking":
			color = "";
			break;
	}
	return (
		<Tag color={color} style={{ fontSize: 12, margin: 0, width: 80 }}>
			{status}
		</Tag>
	);
};
