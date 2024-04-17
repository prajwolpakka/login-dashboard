import Login from "module/auth/ui/login";
import Dashboard from "module/dashboard";
import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route } from "react-router-dom";
import PrivateGuard from "./private-guard";
import PublicGuard from "./public-guard";
import RouteNotFound from "./route-not-found";

// router and routes
export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/login"
				element={
					<PublicGuard>
						<Login />
					</PublicGuard>
				}
			/>
			<Route
				path="/"
				element={
					<PrivateGuard>
						<Dashboard />
					</PrivateGuard>
				}
			/>
			<Route path="*" element={<RouteNotFound />} />
		</>
	)
);
