import React, { useState} from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import FlashOffIcon from '@mui/icons-material/FlashOff';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SSide.css"




const Header = () => {
   
    const [menuCollapse, setMenuCollapse] = useState(true)
    const menuIconClick = () => {
     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  
  return (
    <>
      <div id="header">
          
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
               <div className="yoga">
               
              <p>{menuCollapse ? <EngineeringIcon/>:  "Application" }</p>
              <h3>Application</h3>
              </div>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
            
              {menuCollapse ? (
                <FlashOnIcon/>
              ) : (
                <FlashOffIcon/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent >
          <Menu iconShape="square"  >

    
             <a href="/">  <MenuItem  icon={<AccessibilityNewIcon/>} className='icon'>Home</MenuItem></a> 
              <MenuItem icon={<BarChartIcon />} className='icon'> <a href="/analytic"><pq className="pico" value="10">Analytic</pq></a></MenuItem>
              <MenuItem icon={<ArchitectureIcon/>} className='icon'> <a href="/users"><pq  className="pico" value="20">Users</pq></a></MenuItem>
              <MenuItem icon={<ElectricBoltIcon />}className='icon'><pq  className="pico" value="30">Author</pq></MenuItem>
              <MenuItem icon={<EngineeringIcon/>}className='icon'><pq  className="pico" value="40">Settings</pq></MenuItem>
</Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<AltRouteIcon/>} className='icon'>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
