import React, { useState } from "react";

import AiCustomer from './aiCustomer';
import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderProduct from './aiOrderProduct';
import AiProduct from './aiProduct';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomer");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomer":
            return <AiCustomer />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderProduct":
            return <AiOrderProduct />;
        case "aiProduct":
            return <AiProduct />;
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
                    activePage === "aiInventory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiInventory")}>
                  {"库存记录表".endsWith("表")
                  ? "库存记录表".slice(0, -1) + "管理"
                  : "库存记录表"}
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
                    activePage === "aiOrderProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderProduct")}>
                  {"订单商品表".endsWith("表")
                  ? "订单商品表".slice(0, -1) + "管理"
                  : "订单商品表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                  {"商品表".endsWith("表")
                  ? "商品表".slice(0, -1) + "管理"
                  : "商品表"}
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
