import React, { useState } from "react";

import AiCustomers from './aiCustomers';
import AiEmployees from './aiEmployees';
import AiOrders from './aiOrders';
import AiProducts from './aiProducts';
import AiReviews from './aiReviews';
import AiStock from './aiStock';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiCustomers");

  const renderPage = () => {
    switch (activePage) {
        case "aiCustomers":
            return <AiCustomers />;
        case "aiEmployees":
            return <AiEmployees />;
        case "aiOrders":
            return <AiOrders />;
        case "aiProducts":
            return <AiProducts />;
        case "aiReviews":
            return <AiReviews />;
        case "aiStock":
            return <AiStock />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiCustomers />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiCustomers" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCustomers")}>
                  {"客户表".endsWith("表")
                  ? "客户表".slice(0, -1) + "管理"
                  : "客户表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiEmployees" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiEmployees")}>
                  {"员工表".endsWith("表")
                  ? "员工表".slice(0, -1) + "管理"
                  : "员工表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiOrders" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrders")}>
                  {"订单表".endsWith("表")
                  ? "订单表".slice(0, -1) + "管理"
                  : "订单表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiProducts" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProducts")}>
                  {"商品表".endsWith("表")
                  ? "商品表".slice(0, -1) + "管理"
                  : "商品表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiReviews" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiReviews")}>
                  {"评价表".endsWith("表")
                  ? "评价表".slice(0, -1) + "管理"
                  : "评价表"}
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
