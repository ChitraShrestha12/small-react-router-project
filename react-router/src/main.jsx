import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Contact } from "../Components/Contact";
import { Home } from "../Components/Home";
import { Work } from "../Components/Work";
import { About } from "../Components/About";
import ErrorPage from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
