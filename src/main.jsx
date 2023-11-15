import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom'
import './index.css'
import ErrorPage from './error-page'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
