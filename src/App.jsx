import { createBrowserRouter, RouterProvider } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import Home from "./Componant/pages/Home/Home";
import Signup from "./Componant/pages/Signup/Signup";
import Login from "./Componant/pages/Login/Login";
import profile from "./Componant/pages/profile/profile";
import Notfound from "./Componant/pages/Notfound/Notfound";
import PostDetails from "./Componant/pages/Post Details/Post Details";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Home/>
    },
    {
      path:"/signup",
      element : <Signup/>
    },
    {
      path:"/login",
      element : <Login/>
    },
    {
      path:"/profile",
      element : <profile/>
    },
        {
      path:"/postDetails",
      element : <PostDetails/>
    },
    {
      path:"*",
      element : <Notfound/>
    },

  ])
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </> 
  );
}

export default App;
