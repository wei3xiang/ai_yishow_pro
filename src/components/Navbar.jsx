import React, { useState } from "react";

import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderDetails from './aiOrderDetails';
import AiUser from './aiUser';
import AiUserAddress from './aiUserAddress';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiInventory");

  const renderPage = () => {
    switch (activePage) {
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetails":
            return <AiOrderDetails />;
        case "aiUser":
            return <AiUser />;
        case "aiUserAddress":
            return <AiUserAddress />;
        default:
            return <AiInventory />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
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
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                    订单表
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
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                    用户表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUserAddress" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUserAddress")}>
                    用户地址表
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
