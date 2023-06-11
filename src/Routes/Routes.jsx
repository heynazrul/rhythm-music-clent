import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import DashboardLayout from '../Layout/DashboardLayout';
import SelectedClasses from '../pages/Dashboard/Student/SelectedClasses';
import EnrolledClasses from '../pages/Dashboard/Student/EnrolledClasses';
import PaymentHistory from '../pages/Dashboard/Student/PaymentHistory';
import AddClass from '../pages/Dashboard/Instructor/AddClass';
import MyClasses from '../pages/Dashboard/Instructor/MyClasses';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>,
      },
      {
        path: 'classes',
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/manage-classes',
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: '/dashboard/manage-users',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: '/dashboard/selected-classes',
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: '/dashboard/enrolled-classes',
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: '/dashboard/add-class',
        element: <AddClass></AddClass>,
      },
      {
        path: '/dashboard/my-classes',
        element: <MyClasses> </MyClasses>,
      },
    ],
  },
]);
