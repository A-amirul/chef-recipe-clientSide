import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Blogs from "../components/Blogs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("http://localhost:3000/chefs"),
				

			},
			{
				path: "/login",
				element:<Login></Login>
			},
			{
				path: "/register",
				element:<Registration></Registration>
			},
			{
				path: "/blogs",
				element:<Blogs></Blogs>
			}
		]
	},
]);

export default router;

