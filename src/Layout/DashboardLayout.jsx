import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SideBar from '../pages/Shared/SideBar/SideBar';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {

 
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex ">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Dashboard;
