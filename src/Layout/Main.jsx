import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { useState } from 'react';

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
    </div>
  );
};

export default Main;
