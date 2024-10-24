import React, { useState } from "react";

import AiBranch from './aiBranch';
import AiBranchProduct from './aiBranchProduct';
import AiCategory from './aiCategory';
import AiCategoryProduct from './aiCategoryProduct';
import AiOrder from './aiOrder';
import AiOrderProduct from './aiOrderProduct';
import AiProduct from './aiProduct';
import AiProductStock from './aiProductStock';
import AiUser from './aiUser';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiBranch");

  const renderPage = () => {
    switch (activePage) {
        case "aiBranch":
            return <AiBranch />;
        case "aiBranchProduct":
            return <AiBranchProduct />;
        case "aiCategory":
            return <AiCategory />;
        case "aiCategoryProduct":
            return <AiCategoryProduct />;
        case "aiOrder":
            return <AiOrder />;
        case "aiOrderProduct":
            return <AiOrderProduct />;
        case "aiProduct":
            return <AiProduct />;
        case "aiProductStock":
            return <AiProductStock />;
        case "aiUser":
            return <AiUser />;
        default:
            return <AiBranch />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiBranch" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiBranch")}>
                  {"分店表".endsWith("表")
                  ? "分店表".slice(0, -1) + "管理"
                  : "分店表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiBranchProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiBranchProduct")}>
                  {"分店产品表".endsWith("表")
                  ? "分店产品表".slice(0, -1) + "管理"
                  : "分店产品表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiCategory" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCategory")}>
                  {"产品类别表".endsWith("表")
                  ? "产品类别表".slice(0, -1) + "管理"
                  : "产品类别表"}
                </a>
                </li>
                <li
                className={`layui-nav-item ${
                    activePage === "aiCategoryProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiCategoryProduct")}>
                  {"产品分类关系表".endsWith("表")
                  ? "产品分类关系表".slice(0, -1) + "管理"
                  : "产品分类关系表"}
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
                    activePage === "aiOrderProduct" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiOrderProduct")}>
                  {"订单产品表".endsWith("表")
                  ? "订单产品表".slice(0, -1) + "管理"
                  : "订单产品表"}
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
                    activePage === "aiProductStock" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiProductStock")}>
                  {"产品库存表".endsWith("表")
                  ? "产品库存表".slice(0, -1) + "管理"
                  : "产品库存表"}
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
