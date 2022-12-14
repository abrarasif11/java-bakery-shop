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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/reviews',
          element : <Review></Review>
        },
        {
          path: '/myReviews',
          element : <MyReview></MyReview>
        },
        {
          path: '/aboutUs',
          element : <AboutUs></AboutUs>
        },
        {
          path: '/login',
          element : <Login></Login>
        },
        {
          path: '/signup',
          element : <SignUp></SignUp>
        },
      ]
    },
    {
      path: '*',
      element:<ErrorPage></ErrorPage>
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
