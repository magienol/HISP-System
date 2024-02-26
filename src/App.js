import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home/Home' 
import Customers from "./pages/Customers/Customers";
import Product from "./pages/Product/Product";
import Signle from "./pages/Signle/Signle";
import New from "./pages/new /New";
import Login from "./pages/login/Login";
import Regsiter from "./pages/register/Regsiter";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/Customers/",
    element: <Customers />,
  },
  {
    path:"/Product",
    element: <Product  />,
  },
  {
    path:"/Product/:ProductId/new",
    element: <New  />,
  },
  {
    path:"/Customer/:CustomerId/new",
    element: <New  />,
  },
  {
    path:"/Customers/:CustomerId",
    element: <Signle />,
  },
  {
    path:"/Product/:ProductId",
    element: <Signle />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Regsiter />,
  },
]);
function App() {
  return (
    <div className="app">
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;