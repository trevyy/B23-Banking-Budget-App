import React from "react";
import "./Header.scss";

import { SiteLogo } from "../../assets/icons.jsx";

import useCurrentDateTime from "../../hooks/useCurrentDateTime.jsx";
import findUser from "../../hooks/useUserFinder.jsx";

function Header({title}) {
  const { formattedDate } = useCurrentDateTime("ddd, MMM DD, hh:mm A");

  return (
    <div className="header"> 
      <p className="title"> {title} </p>
      <p className="welcome"> Welcome,&nbsp;<b>{findUser("currentUser").fullname}</b>! </p>
      <p className="time"> {formattedDate} </p>
      <div className="logo"> 
        <p className="logo-img"> <SiteLogo /> </p>
        <p className="logo-txt"> JTT Bank, Inc. </p>
      </div>
    </div>
  );
}
  
export default Header;
  