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
import InstructorHome from '../pages/Dashboard/Instructor/InstructorHome';
import AddClass from '../pages/Dashboard/Instructor/AddClass';
import MyClasses from '../pages/Dashboard/Instructor/MyClasses';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import StudentRoute from './StudentRoute';
import AdminHome from '../pages/Dashboard/Admin/AdminHome';
import InstructorRoute from './InstructorRoute';
import Payment from '../pages/Dashboard/Student/Payment/Payment';
import StudentHome from '../pages/Dashboard/Student/StudentHome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // Admin Route
      {
        path: '/dashboard/admin-home',
        element: <AdminHome></AdminHome>,
      },
      {
        path: '/dashboard/manage-classes',
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manage-users',
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },

      // Instructor Route
      {
        path: '/dashboard/instructor-home',
        element: <InstructorHome></InstructorHome>,
      },
      {
        path: '/dashboard/add-class',
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: '/dashboard/my-classes',
        element: (
          <InstructorRoute>
            <MyClasses> </MyClasses>
          </InstructorRoute>
        ),
      },

      // Student Route
      {
        path: '/dashboard/student-home',
        element: <StudentHome></StudentHome>,
      },

      {
        path: '/dashboard/selected-classes',
        element: (
          <StudentRoute>
            <SelectedClasses></SelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: '/dashboard/enrolled-classes',
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>,
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
