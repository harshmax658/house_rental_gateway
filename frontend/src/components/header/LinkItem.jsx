import React from "react";
// import { NavLink } from "react-router-dom";
import { IconStyle } from "./HeaderStyle";

// const LinkItem = ({ Icon,pathname, setNewPo.st }) => {
  const LinkItem = ({value}) => {
  return (
    // <IconStyle onClick={() => setNewPost(true)}>
    <IconStyle >
        {/* <NavLink
          // to={pathname}
          // isActive={changeValue(true)}
        >
          {value}
        </NavLink> */}
        <div>
           {value}
        </div>
    </IconStyle>
  );
};

export default LinkItem;
