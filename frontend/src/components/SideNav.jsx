import React from 'react';
import './SideNav.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WindowIcon from '@mui/icons-material/Window';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const SideNav = () => {
  return (
    <div className='side_nav'>
        <div className='nav_logo'><AcUnitIcon /></div>
        <div className='nav_icons'>
            <div className='nav_icon'><WindowIcon /></div>
            <div className='nav_icon'><BusinessCenterIcon /></div>
            <div className='nav_icon'><PeopleAltIcon /></div>
            <div className='nav_icon'><DensityMediumOutlinedIcon /></div>
            <div className='nav_icon'><CalendarMonthOutlinedIcon /></div>
            <div className='nav_icon'><NotificationsOutlinedIcon /></div>
            <div className='nav_icon'><SettingsIcon /></div>
        </div>
    </div>
  )
}

export default SideNav;