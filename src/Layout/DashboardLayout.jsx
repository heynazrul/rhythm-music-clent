import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SideBar from '../pages/Shared/SideBar/SideBar';
import Footer from '../pages/Shared/Footer/Footer';

const Dashboard = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='flex '>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
