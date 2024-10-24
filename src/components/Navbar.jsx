import React, { useState } from "react";

import AiVendor from './aiVendor';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiVendor");

  const renderPage = () => {
    switch (activePage) {
        case "aiVendor":
            return <AiVendor />;
        default:
            return <AiVendor />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiVendor" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiVendor")}>
                  {"供应商表".endsWith("表")
                  ? "供应商表".slice(0, -1) + "管理"
                  : "供应商表"}
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
