import React, { useState } from "react";
import "./Sidebar.scss";
import { HamIcon, HomeIcon, TransactIcon, TransferIcon, UserIcon, LogoutIcon} from "../assets/icons";

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={handleCollapse}> <HamIcon /> </button>
      {!isCollapsed && ( <div>
        <div className='sidebar-content'>
          <p className={currentPage === 'Dashboard' ? 'selected' : ''} onClick={() => setCurrentPage('Dashboard')}> <HomeIcon/> Dashboard </p>
          <p className={currentPage === 'Transaction' ? 'selected' : ''} onClick={() => setCurrentPage('Transaction')}> <TransactIcon/> Transaction </p>
          <p className={currentPage === 'Transfer' ? 'selected' : ''} onClick={() => setCurrentPage('Transfer')}> <TransferIcon/> Transfer </p>
          {/*<p className={currentPage === 'Account' ? 'selected' : ''} onClick={() => setCurrentPage('Account')}> < UserIcon /> Account </p>*/}
          {/*<p className={currentPage === 'Settings' ? 'selected' : ''} onClick={() => setCurrentPage('Settings')}>  Settings </p>*/}
          <p className={currentPage === 'Logout' ? 'selected' : ''} onClick={() => setCurrentPage('Logout')}> <LogoutIcon/> Logout </p>
        </div> 
      </div>)}
    </div>
  );
};

export default Sidebar;