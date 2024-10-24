import React, { useState } from "react";

import AiFeedback from './aiFeedback';
import AiInventory from './aiInventory';
import AiOrder from './aiOrder';
import AiOrderDetail from './aiOrderDetail';
import AiProductInfo from './aiProductInfo';
import AiPromotion from './aiPromotion';
import AiSupplier from './aiSupplier';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiFeedback");

  const renderPage = () => {
    switch (activePage) {
        case "aiFeedback":
            return <AiFeedback />;
        case "aiInventory":
            return <AiInventory />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderDetail":
            return <AiOrderDetail />;
        case "aiProductInfo":
            return <AiProductInfo />;
        case "aiPromotion":
            return <AiPromotion />;
        case "aiSupplier":
            return <AiSupplier />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiFeedback />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiFeedback" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFeedback")}>
                  {"用户反馈表".endsWith("表")
                  ? "用户反馈表".slice(0, -1) + "管理"
                  : "用户反馈表"}
                </a>
                </li>
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
                    activePage === "aiProductInfo" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductInfo")}>
                  {"产品信息表".endsWith("表")
                  ? "产品信息表".slice(0, -1) + "管理"
                  : "产品信息表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiPromotion" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiPromotion")}>
                  {"促销活动表".endsWith("表")
                  ? "促销活动表".slice(0, -1) + "管理"
                  : "促销活动表"}
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
