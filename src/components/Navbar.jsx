import React, { useState } from "react";

import AiEmployee from './aiEmployee';
import AiOrder from './aiOrder';
import AiProduct from './aiProduct';
import AiStock from './aiStock';
import AiSupplier from './aiSupplier';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiEmployee");

  const renderPage = () => {
    switch (activePage) {
        case "aiEmployee":
            return <AiEmployee />;
        case "aiOrder":
            return <AiOrder />;
        case "aiProduct":
            return <AiProduct />;
        case "aiStock":
            return <AiStock />;
        case "aiSupplier":
            return <AiSupplier />;
        case "aiUser":
            return <AiUser />;
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
                    员工表
                </a>
                </li>
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
                    activePage === "aiProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProduct")}>
                    商品表
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
                    activePage === "aiSupplier" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiSupplier")}>
                    供应商表
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
