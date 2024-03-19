import React, { useState } from "react";
import "./Sidebar.scss";
import { HamIcon, HomeIcon, TransactIcon, TransferIcon, LogoutIcon} from "../../assets/icons";
import { Link } from "react-router-dom";
import handleLogout from "../../hooks/handleLogout";

const NavItems = [
  {
    url: "/dashboard",
    name: "Dashboard",
    logo: <HomeIcon />,
  },
  {
    url: "/transaction",
    name: "Transaction",
    logo: <TransactIcon />,
  },
  {
    url: "/transfer",
    name: "Transfer",
    logo: <TransferIcon />,
  },
  {
    url: "/login", 
    name: "Logout",
    logo: <LogoutIcon />,
  },
];

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handleItemClick = (item) => {
    setCurrentPage(item.name);
    if (item.name === "Logout") {
      handleLogout();
    }
  }

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={handleCollapse}> <HamIcon /> </button>
      {!isCollapsed && ( <div>
        <div className='sidebar-content'>
          {NavItems.map((item, index) => (
            <Link className="item-link"
                  key={item.name + index}
                  to={item.url}
                  onClick={() => handleItemClick(item)}
            >
              <p className={currentPage === item.name ? 'selected' : ''}> 
                {item.logo} {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div> )}
    </div>
  );
};

export default Sidebar;