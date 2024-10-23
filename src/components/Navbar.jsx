import React, { useState } from "react";

import AiCategory from './aiCategory';
import AiOrder from './aiOrder';
import AiProduct from './aiProduct';
import AiStore from './aiStore';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCategory");

  const renderPage = () => {
    switch (activePage) {
        case "aiCategory":
            return <AiCategory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiProduct":
            return <AiProduct />;
        case "aiStore":
            return <AiStore />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiCategory />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCategory")}>
                  {"商品类别表".endsWith("表")
                  ? "商品类别表".slice(0, -1) + "管理"
                  : "商品类别表"}
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
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                  {"商品信息表".endsWith("表")
                  ? "商品信息表".slice(0, -1) + "管理"
                  : "商品信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiStore" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiStore")}>
                  {"店铺信息表".endsWith("表")
                  ? "店铺信息表".slice(0, -1) + "管理"
                  : "店铺信息表"}
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
