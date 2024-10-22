import React, { useState } from "react";

import AiBeers from './aiBeers';
import AiInventory from './aiInventory';
import AiOrderDetails from './aiOrderDetails';
import AiOrders from './aiOrders';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiBeers");

  const renderPage = () => {
    switch (activePage) {
        case "aiBeers":
            return <AiBeers />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrderDetails":
            return <AiOrderDetails />;
        case "aiOrders":
            return <AiOrders />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiBeers />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiBeers" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiBeers")}>
                    啤酒表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiInventory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInventory")}>
                    库存表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrderDetails" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderDetails")}>
                    订单详情表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrders" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrders")}>
                    订单表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                    用户表
                </a>
                </li>
          </ul>
        </div>
      </div>
      <div className="layui-header">
        <div className="layui-logo">
          <img
            style={{
              position: "absolute",
              left: "10px",
              width: "40px",
              top: "10px",
            }}
            src="logo.png" /* 替换为实际的图片路径 */
            alt="logo"
            className="header-logo"
          />
          Bank AI
        </div>
      </div>
      <div className="layui-body">
        <div style={{ padding: "15px" }}>{renderPage()}</div>
      </div>
    </div>
  );
};

export default Navbar;
