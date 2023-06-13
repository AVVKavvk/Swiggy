import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Search from "./src/components/Search";
import Menu from "./src/components/Menu";


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"/menu/:id",
        element:<Menu/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter } />);
