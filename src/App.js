import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Review from './Pages/Reviews/Review';
import MyReview from './Pages/Reviews/MyReview';
import AboutUs from './Pages/AboutUs/AboutUs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import { Toaster } from 'react-hot-toast';
import Spinner from './Shared/Spinner/Spinner';
import AllItem from './Pages/AllItem/AllItem';
import SingleCategoryItem from './Pages/SingleCategoryItem/SingleCategoryItem';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import MyOrder from './Pages/Dashboard/MyOrders/MyOrder';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import AddItems from './Pages/AddItems/AddItems';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allItems',
          element: <PrivateRoute><AllItem></AllItem></PrivateRoute>
        },
        {
          path: '/categories/:id',
          loader: ({ params }) =>
            fetch(`http://localhost:5000/categories/${params.id}`),
          element: <PrivateRoute><SingleCategoryItem></SingleCategoryItem></PrivateRoute>
        },
        {
          path: '/reviews',
          element: <Review></Review>
        },
        // {
        //   path: '/orders',
        //   element: <Order></Order>
        // },
        {
          path: '/myReviews',
          element: <MyReview></MyReview>
        },
        {
          path: '/aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyOrder></MyOrder>
        },
        {
          path: '/dashboard/allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: '/dashboard/addItems',
          element: <AddItems></AddItems>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
