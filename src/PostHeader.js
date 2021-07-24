import React from 'react'
import "./PostHeader.css"
import AppsIcon from '@material-ui/icons/Apps';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const PostHeader = () => {
  return (
    <div className="postHeader">
   <div className="postHeader__info1">
     <AppsIcon/>
     <h3>posts</h3>
   </div>
   <div className="postHeader__info">
     <MenuBookIcon/>
     <h3>guides</h3>
   </div> 
   <div className="postHeader__info">
     <LocalMallIcon/>
     <h3>igtv</h3>
   </div>
    <div className="postHeader__info">
     <AssignmentIndIcon/>
     <h3>tagged</h3>
   </div>
    </div>
  )
}

export default PostHeader
