import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './sidebar.css';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'> 
      <span className='logo'> UiO System </span>
      </div>
      <hr/>
      <div className='bottom'> 
      <ul>
        <p className='title'>Main </p>
        <li>
        <DashboardIcon className='icon'/>
        <span>Dashbaord</span>
      </li>
      <p className='title'>List </p>
        <li>
        <Person3Icon className='icon'/>
        <span>Users</span>
      </li>
      
        <li>
        <LocalGroceryStoreOutlinedIcon className='icon'/>
        <span>Products</span>
      </li>

      <li>
        <CreditCardOutlinedIcon className='icon'/>
        <span>Orders</span>
      </li>

        <p className='title'>Chart </p>
        <li>
        <InsertChartOutlinedIcon className='icon'/>
        <span>Stats</span>
      </li>
      <li>
        <NotificationsActiveOutlinedIcon className='icon'/>
        <span>Notifications</span>
      </li>
   

      <p className='title'>Services  </p>
        <li>
        <DnsOutlinedIcon className='icon'/>
        <span>Health System</span>
      </li>
      <li>
        < SettingsOutlinedIcon className='icon'/>
        <span>Settings</span>
      </li>
      <p className='title'> User Interface  </p>
      <li>
        <SupervisedUserCircleOutlinedIcon className='icon'/>
        <span>Profile </span>
      </li>

      <li>
        <CalendarMonthOutlinedIcon className='icon'/>
        <span>Calendar </span>
      </li>

      <li>
        <HelpOutlineOutlinedIcon className='icon'/>
        <span>Helper </span>
      </li>

      <li>
        <LogoutOutlinedIcon className='icon'/>
        <span>Logout </span>
      </li>

      </ul>
       </div>
      
    </div>
  )
}

export default sidebar;

