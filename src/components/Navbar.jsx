import React, { useState } from "react";

import AiFranchisee from './aiFranchisee';

const Navbar = () => {
  const [activePage, setActivePage] = useState("aiFranchisee");

  const renderPage = () => {
    switch (activePage) {
        case "aiFranchisee":
            return <AiFranchisee />;
        default:
            return <AiFranchisee />;
    }
  };

  return (
    <div>
      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <ul className="layui-nav layui-nav-tree" lay-filter="test">
                <li
                className={`layui-nav-item ${
                    activePage === "aiFranchisee" ? "layui-this" : ""
                }`}
                >
                <a href="#" onClick={() => setActivePage("aiFranchisee")}>
                  {"物流公司加盟信息表".endsWith("表")
                  ? "物流公司加盟信息表".slice(0, -1) + "管理"
                  : "物流公司加盟信息表"}
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
