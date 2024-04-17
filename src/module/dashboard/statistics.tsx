import { Card, Typography } from "antd";
import React from "react";
import { formatNumber } from "util/format-number";

interface Props {
	title: string;
	value: number;
	isGrowth: boolean;
	percent: string;
}

export const Statistics: React.FC<Props> = (props) => {
	const { title, value, isGrowth, percent } = props;
	return (
		<Card style={{ width: 250 }}>
			<Typography.Text style={{ color: "#8b8d96", fontWeight: 400, fontSize: 12 }}>{title}</Typography.Text>
			<Typography.Title level={2} style={{ margin: 0 }}>
				{formatNumber(value)}
			</Typography.Title>
			<Typography.Text style={{ fontSize: 12, color: isGrowth ? "#2223f5" : "red" }}>
				{isGrowth ? `+` + percent : -percent}% vs last month
			</Typography.Text>
		</Card>
	);
};
