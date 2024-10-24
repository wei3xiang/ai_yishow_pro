import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiFlower束 from './aiFlower束';
import AiManager from './aiManager';
import AiOrder from './aiOrder';
import AiOrderProducts from './aiOrderProducts';
import AiShop from './aiShop';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomer");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiFlower束":
            return <AiFlower束 />;
        case "aiManager":
            return <AiManager />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderProducts":
            return <AiOrderProducts />;
        case "aiShop":
            return <AiShop />;
        case "aiUser":
            return <AiUser />;
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
                  {"客户表".endsWith("表")
                  ? "客户表".slice(0, -1) + "管理"
                  : "客户表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower束" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower束")}>
                  {"花束信息表".endsWith("表")
                  ? "花束信息表".slice(0, -1) + "管理"
                  : "花束信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiManager" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiManager")}>
                  {"管理员表".endsWith("表")
                  ? "管理员表".slice(0, -1) + "管理"
                  : "管理员表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrder" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrder")}>
                  {"订单信息表".endsWith("表")
                  ? "订单信息表".slice(0, -1) + "管理"
                  : "订单信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrderProducts" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderProducts")}>
                  {"订单花束关联表".endsWith("表")
                  ? "订单花束关联表".slice(0, -1) + "管理"
                  : "订单花束关联表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiShop" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiShop")}>
                  {"花店信息表".endsWith("表")
                  ? "花店信息表".slice(0, -1) + "管理"
                  : "花店信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiUser" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiUser")}>
                  {"用户表".endsWith("表")
                  ? "用户表".slice(0, -1) + "管理"
                  : "用户表"}
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
