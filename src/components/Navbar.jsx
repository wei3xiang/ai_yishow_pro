import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiFlowerShop from './aiFlowerShop';
import AiFlowerType from './aiFlowerType';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomer");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlowerShop":
            return <AiFlowerShop />;
        case "aiFlowerType":
            return <AiFlowerType />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        default:
            return <AiCustomer />;
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
                  {"客户信息表".endsWith("表")
                  ? "客户信息表".slice(0, -1) + "管理"
                  : "客户信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerShop")}>
                  {"花店基本信息表".endsWith("表")
                  ? "花店基本信息表".slice(0, -1) + "管理"
                  : "花店基本信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerType" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerType")}>
                  {"花卉种类信息表".endsWith("表")
                  ? "花卉种类信息表".slice(0, -1) + "管理"
                  : "花卉种类信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                  {"鲜花订单信息表".endsWith("表")
                  ? "鲜花订单信息表".slice(0, -1) + "管理"
                  : "鲜花订单信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrderDetail" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderDetail")}>
                  {"订单详情表".endsWith("表")
                  ? "订单详情表".slice(0, -1) + "管理"
                  : "订单详情表"}
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
