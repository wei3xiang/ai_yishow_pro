import React, { useState } from "react";

import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderItem from './aiOrderItem';
import AiProduct from './aiProduct';
import AiProductCategory from './aiProductCategory';
import AiSupplier from './aiSupplier';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiInventory");

  const renderPage = () => {
    switch (activePage) {
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderItem":
            return <AiOrderItem />;
        case "aiProduct":
            return <AiProduct />;
        case "aiProductCategory":
            return <AiProductCategory />;
        case "aiSupplier":
            return <AiSupplier />;
        case "aiUser":
            return <AiUser />;
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
                  {"库存表".endsWith("表")
                  ? "库存表".slice(0, -1) + "管理"
                  : "库存表"}
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
                    activePage === "aiOrderItem" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderItem")}>
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
                  {"产品表".endsWith("表")
                  ? "产品表".slice(0, -1) + "管理"
                  : "产品表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProductCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductCategory")}>
                  {"产品类别表".endsWith("表")
                  ? "产品类别表".slice(0, -1) + "管理"
                  : "产品类别表"}
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
