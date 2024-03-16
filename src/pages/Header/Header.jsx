import React, { useState } from "react";
import "./Header.scss";
import useCurrentDateTime from "../../hooks/CurrentDateTime.jsx";
import { SiteLogo } from "../../assets/icons.jsx";

function Header() {
  const { formattedDate } = useCurrentDateTime("ddd, MMM DD, hh:mm A");

  return (
    <div className="header"> 
        <p className="title"> Dashboard </p>
        <p className="time"> {formattedDate} </p>
        <div className="logo"> 
          <p className="logo-img"> <SiteLogo /> </p>
          <p className="logo-txt"> JJT Bank, Inc. </p>
      </div>
    </div>
  );
}
  
export default Header;
  