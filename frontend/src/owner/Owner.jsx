import React, { useState } from "react";
import AddHouse from "../components/add house/AddHouse";
import "./d.css";

const DashBoard = () => {
  const { addHouse, sertAddHouse } = useState(true);

  return (
    <>
      <div id="logo">
        <span class="big-logo">Admin Panel</span>
        <span class="small-logo">S!M</span>
      </div>
      <div id="left-menu">
        <ul>
          <li class="has-sub">
            <a href="#">
              <i class="ion-ios-person-outline"></i>
              <span>Add House</span>
            </a>
            <ul>
              <li>
                <a href="#">UI Elements Item 1</a>
              </li>
              <li>
                <a href="#">UI Elements Item 2</a>
              </li>
              <li>
                <a href="#">UI Elements Item 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="page-container">{!addHouse ? <AddHouse /> : null}</div>
      <div id="main-content">
        <div id="header">
          <div class="header-left float-left">
            <i id="toggle-left-menu" class="ion-android-menu"></i>
          </div>

          <div class="header-right float-right">
            <i class="ion-ios-people"></i>
          </div>
        </div>
      </div>

      <span id="show-lable">Hello</span>
    </>
  );
};

export default DashBoard;
