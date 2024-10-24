import React, { useState } from "react";

import AiFlower from './aiFlower';
import AiFlowerType from './aiFlowerType';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';
import AiStock from './aiStock';
import AiSupplier from './aiSupplier';
import AiSupplierStock from './aiSupplierStock';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiFlower");

  const renderPage = () => {
    switch (activePage) {
        case "aiFlower":
            return <AiFlower />;
        case "aiFlowerType":
            return <AiFlowerType />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        case "aiStock":
            return <AiStock />;
        case "aiSupplier":
            return <AiSupplier />;
        case "aiSupplierStock":
            return <AiSupplierStock />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiFlower />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlower" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlower")}>
                  {"花朵表".endsWith("表")
                  ? "花朵表".slice(0, -1) + "管理"
                  : "花朵表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiFlowerType" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFlowerType")}>
                  {"花种类表".endsWith("表")
                  ? "花种类表".slice(0, -1) + "管理"
                  : "花种类表"}
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
                    activePage === "aiOrderDetail" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderDetail")}>
                  {"订单详情表".endsWith("表")
                  ? "订单详情表".slice(0, -1) + "管理"
                  : "订单详情表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiStock" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiStock")}>
                  {"库存表".endsWith("表")
                  ? "库存表".slice(0, -1) + "管理"
                  : "库存表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiSupplier" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSupplier")}>
                  {"供应商表".endsWith("表")
                  ? "供应商表".slice(0, -1) + "管理"
                  : "供应商表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiSupplierStock" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSupplierStock")}>
                  {"供应商库存表".endsWith("表")
                  ? "供应商库存表".slice(0, -1) + "管理"
                  : "供应商库存表"}
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
