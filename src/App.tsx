import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { store } from "store";
import AppThemeProvider from "theme";

interface Props {}

const App: React.FC<Props> = () => {
	return (
		<Provider store={store}>
			<AppThemeProvider>
				<RouterProvider router={router} />
			</AppThemeProvider>
		</Provider>
	);
};

export default App;
