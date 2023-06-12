import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaCartPlus, FaChalkboardTeacher, FaUsersCog } from 'react-icons/fa';
import { MdPayments, MdAssignmentAdd } from 'react-icons/md';
import { RiListSettingsFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import useAdmin from '../../../hooks/useAdmin';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // TODO: load data from server to have dynamic isAdmin
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  const isInstructor = false;
  console.log(isInstructor);

  const isStudent = false;
  console.log(isStudent);

  const adminNavItems = [
    {
      to: '/dashboard/admin-home',
      title: 'Admin Dashboard',
      icon: <AiFillHome></AiFillHome>,
    },
    {
      to: '/dashboard/manage-classes',
      title: 'Manage Classes',
      icon: <RiListSettingsFill></RiListSettingsFill>,
    },
    {
      to: '/dashboard/manage-users',
      title: 'Manage Users',
      icon: <FaUsersCog></FaUsersCog>,
    },
  ];

  const studentNavItems = [
    {
      to: '/',
      title: 'Dashboard',
      icon: <AiFillHome></AiFillHome>,
    },
    {
      to: '/dashboard/selected-classes',
      title: 'My Selected Classes',
      icon: <FaCartPlus></FaCartPlus>,
    },
    {
      to: '/dashboard/enrolled-classes',
      title: 'My Enrolled Classes',
      icon: <FaCartPlus></FaCartPlus>,
    },
    {
      to: '/dashboard/payment-history',
      title: 'Payment History',
      icon: <MdPayments></MdPayments>,
    },
  ];

  const instructorNavItems = [
    {
      to: '/',
      title: 'Dashboard',
      icon: <AiFillHome></AiFillHome>,
    },
    {
      to: '/dashboard/add-class',
      title: 'Add a Class',
      icon: <MdAssignmentAdd></MdAssignmentAdd>,
    },
    {
      to: '/dashboard/my-classes',
      title: 'My Classes',
      icon: <FaChalkboardTeacher></FaChalkboardTeacher>,
    },
  ];
  return (
    <Sidebar
      className="bg-base-200 h-[calc(100vh-150px)]"
      collapsed={collapsed}>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}>
        {/* Control menu collapse */}
        <div className="flex items-center justify-center relative mt-6">
          <h2 className={`text-xl font-semibold ${collapsed ? 'hidden' : 'block'}`}>Admin</h2>
          <button
            className={`${!collapsed && 'absolute right-3'}`}
            onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <GiHamburgerMenu></GiHamburgerMenu> : <IoMdClose size={20}></IoMdClose>}
          </button>
        </div>
        <div className={`${collapsed ? 'hidden' : 'mt-5 flex flex-col justify-center items-center'}`}>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            </div>
          </div>
          <h2 className="text-center font-bold text-xl mt-3">Hello Naz</h2>
        </div>
        <div className="divider"></div>
        {isAdmin &&
          adminNavItems.map((item, idx) => (
            <MenuItem
              key={idx}
              icon={item.icon}
              component={<NavLink to={item.to}></NavLink>}>
              {item.title}
            </MenuItem>
          ))}
        {isInstructor &&
          instructorNavItems.map((item, idx) => (
            <MenuItem
              key={idx}
              icon={item.icon}
              component={<NavLink to={item.to}></NavLink>}>
              {item.title}
            </MenuItem>
          ))}

        {isStudent &&
          studentNavItems.map((item, idx) => (
            <MenuItem
              key={idx}
              icon={item.icon}
              component={<NavLink to={item.to}></NavLink>}>
              {item.title}
            </MenuItem>
          ))}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
