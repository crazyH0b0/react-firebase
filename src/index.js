import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/nav/navigation';
import reportWebVitals from './reportWebVitals';
import SignIn from './routes/sign-in/signIn';
import { UserProvider } from './context/user.context';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
    children: [
      {
        index:true,   
        element:<App></App>       
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>
      }
    ],
        
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
     <RouterProvider router={router} />
     </UserProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
