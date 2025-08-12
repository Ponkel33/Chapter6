import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./Pages/Header";


const router = createBrowserRouter([
    { path: "/", element: <App /> },
]);

export default router;