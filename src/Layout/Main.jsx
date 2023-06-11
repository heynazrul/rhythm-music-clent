import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  console.log(currentTheme);
  return (
    <div>
      <NavBar
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}></NavBar>
      <Outlet></Outlet>
      <Footer currentTheme={currentTheme}></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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

export default Main;
