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
import useInstructor from '../../../hooks/useInstructor';
import useAuth from '../../../hooks/useAuth';
import useStudent from '../../../hooks/useStudent';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();

  // TODO: load data from server to have dynamic isAdmin
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log('admin', isAdmin);

  const [isInstructor] = useInstructor();
  console.log('instructor', isInstructor);

  const [isStudent] = useStudent()
  console.log('student', isStudent);

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
      to: '/dashboard/student-home',
      title: 'Student Dashboard',
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
      to: '/dashboard/instructor-home',
      title: 'Instructor Dashboard',
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
      className="bg-base-200 min-h-[calc(100vh-150px)]"
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
          <h2 className={`text-xl text-primary font-bold ${collapsed ? 'hidden' : 'block'}`}>
            {(isAdmin && 'Admin') || (isInstructor && 'Instructor') || (isStudent && 'Student')}
          </h2>
          <button
            className={`${!collapsed && 'absolute right-3'}`}
            onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <GiHamburgerMenu></GiHamburgerMenu> : <IoMdClose size={20}></IoMdClose>}
          </button>
        </div>
        <div className={`${collapsed ? 'hidden' : 'mt-5 flex flex-col justify-center items-center'}`}>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : 'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg'
                }
              />
            </div>
          </div>
          <h2 className="text-center font-semibold text-lg mt-3">
            Hello, {user?.displayName ? user.displayName : 'User'}{' '}
          </h2>
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
