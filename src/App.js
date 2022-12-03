import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Review from './Pages/Reviews/Review';
import MyReview from './Pages/Reviews/MyReview';
import AboutUs from './Pages/AboutUs/AboutUs';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

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
      ]
    },
    {
      path: '*',
      element:<ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
