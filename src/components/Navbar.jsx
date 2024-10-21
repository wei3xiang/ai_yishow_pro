import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiFlower from './aiFlower';
import AiFlowerShop from './aiFlowerShop';
import AiOrder from './aiOrder';

const Navbar = () => {
  const [activePage, setActivePage] = useState("/");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlower":
            return <AiFlower />;
        case "aiFlowerShop":
            return <AiFlowerShop />;
        case "aiOrder":
            return <AiOrder />;
        default:
            return <></>;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCustomer" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCustomer")}>
                    客户表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower")}>
                    花表
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerShop")}>
                    花店表
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
