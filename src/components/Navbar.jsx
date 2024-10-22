import React, { useState } from "react";

import AiOrder from './aiOrder';
import AiStock from './aiStock';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiOrder");

  const renderPage = () => {
    switch (activePage) {
        case "aiOrder":
            return <AiOrder />;
        case "aiStock":
            return <AiStock />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiOrder />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
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
                    activePage === "aiStock" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiStock")}>
                    库存表
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
