import React, { useMemo, useState } from "react";

const Index = ({
  data,
  onClickCreate,
  onClickRemove,
  onClickUpdate,
  onClickDetail,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = useMemo(() => {
    return data.filter(
      (aiShop) =>

       `${aiShop.ai_shop_name}`.includes(searchTerm) ||
       `${aiShop.ai_shop_contact}`.includes(searchTerm) ||
       `${aiShop.ai_shop_address}`.includes(searchTerm) ||
       `${aiShop.ai_shop_phone}`.includes(searchTerm) ||
       `${aiShop.ai_shop_email}`.includes(searchTerm)
    );
  }, [data, searchTerm]);

  return (
    <>
      <div className="layui-panel">
        <div
          className="layui-form"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div className="layui-form-item" style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="模糊查询"
              className="layui-input"
              style={{ boxShadow: "none", borderRadius: "0", border: "none" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            style={{ marginBottom: '2px', marginLeft: '10px' }}
            className="layui-btn" onClick={() => setSearchTerm("")}>
            重置
          </button>
          <button
            style={{ marginBottom: '2px' }}
            className="layui-btn layui-btn-normal"
            onClick={() => onClickCreate()}
          >
            新增
          </button>
        </div>
      </div>

      <table
        className="layui-table"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <thead>
          <tr>
              <th>店铺名称</th>
              <th>店铺负责人</th>
              <th>店铺地址</th>
              <th>店铺电话</th>
              <th>店铺邮箱</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiShop) => (
            <tr key={aiShop.uuid}>
              <td>{aiShop.ai_shop_name}</td>
              <td>{aiShop.ai_shop_contact}</td>
              <td>{aiShop.ai_shop_address}</td>
              <td>{aiShop.ai_shop_phone}</td>
              <td>{aiShop.ai_shop_email}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiShop)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiShop)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiShop)}
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Index;