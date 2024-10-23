import React, { useState } from "react";

import AiFlowerInfo from './aiFlowerInfo';
import AiSaleRecord from './aiSaleRecord';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiFlowerInfo");

  const renderPage = () => {
    switch (activePage) {
        case "aiFlowerInfo":
            return <AiFlowerInfo />;
        case "aiSaleRecord":
            return <AiSaleRecord />;
        default:
            return <AiFlowerInfo />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerInfo" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerInfo")}>
                  {"花卉基本信息表".endsWith("表")
                  ? "花卉基本信息表".slice(0, -1) + "管理"
                  : "花卉基本信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiSaleRecord" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSaleRecord")}>
                  {"销售记录表".endsWith("表")
                  ? "销售记录表".slice(0, -1) + "管理"
                  : "销售记录表"}
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
