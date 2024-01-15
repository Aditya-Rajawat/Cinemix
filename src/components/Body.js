import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import MyList from "./MyList";
import Container from "./Container";
import GPTSearch from "./GPTSearch";
import PlayMovie from "./PlayMovie";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/browse",
      element: <Browse/>,
      children:[  
        {
          path:"/browse",
          element:<Container/>
        },
        {
          path:"/browse/my-list",
          element:<MyList/>
        },
        {
          path:"/browse/gpt-search",
          element:<GPTSearch/>
        },
        {
          path:"/browse/play/:movieId",
          element:<PlayMovie/>
        }
      ]
    },
  ]);



  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
