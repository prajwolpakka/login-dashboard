import { ConfigProvider } from "antd";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const AppThemeProvider: React.FC<Props> = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: { colorPrimary: "#27276e" },
				components: {
					Layout: {
						headerHeight: 50,
					},
					Spin: {
						colorPrimary: "blue",
					},
					DatePicker: {
						controlHeight: 34,
					},
					Input: {
						controlHeight: 40,
						activeShadow: "none",
					},
					InputNumber: {
						activeShadow: "none",
						controlHeight: 34,
					},
					Badge: {
						colorPrimary: "#27276e",
					},
					Menu: {
						itemSelectedColor: "white",
						itemSelectedBg: "#27276e",
						itemHoverBg: "tranparent",
						itemActiveBg: "transparent",
					},
					Button: {
						controlHeight: 40,
					},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AppThemeProvider;
