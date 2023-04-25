import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";

const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
])


export default routes