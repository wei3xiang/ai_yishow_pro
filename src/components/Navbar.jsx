import React, { useState } from "react";

import AiEmployee from './aiEmployee';
import AiOrder from './aiOrder';
import AiRoom from './aiRoom';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiEmployee");

  const renderPage = () => {
    switch (activePage) {
        case "aiEmployee":
            return <AiEmployee />;
        case "aiOrder":
            return <AiOrder />;
        case "aiRoom":
            return <AiRoom />;
        default:
            return <AiEmployee />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiEmployee" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiEmployee")}>
                  {"员工表".endsWith("表")
                  ? "员工表".slice(0, -1) + "管理"
                  : "员工表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                  {"订单表".endsWith("表")
                  ? "订单表".slice(0, -1) + "管理"
                  : "订单表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiRoom" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiRoom")}>
                  {"房间表".endsWith("表")
                  ? "房间表".slice(0, -1) + "管理"
                  : "房间表"}
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
