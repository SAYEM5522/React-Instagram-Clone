import React from 'react'
import "./Sidebar.css"
import SidebarBody from './SidebarBody'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RatereviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="sidebar__header">
    <div className="sidebar__header-info">
      <p>sayem3855</p>
      <ExpandMoreIcon/>
    </div>
    <div className="sidebar__header-icon">
    <RatereviewOutlinedIcon/>
    </div>
     </div>
     <SidebarBody/>
    </div>
  )
}

export default Sidebar
