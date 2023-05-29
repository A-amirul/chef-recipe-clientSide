import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Blogs from "../components/Blogs";
import RecipeDetails from "../components/RecipeDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("https://the-chef-recipe-corner-server-a-amirul.vercel.app/chefs"),
				

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
			},
			
			{
				path: "/chefs/:id",
				element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
				loader: ({ params }) => fetch(`https://the-chef-recipe-corner-server-a-amirul.vercel.app/chefs/${params.id}`)
			}
		]
	},
]);

export default router;

