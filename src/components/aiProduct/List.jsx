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
      (aiProduct) =>

       `${aiProduct.aiProductId}`.includes(searchTerm) ||
       `${aiProduct.aiProductName}`.includes(searchTerm) ||
       `${aiProduct.aiPrice}`.includes(searchTerm) ||
       `${aiProduct.aiStock}`.includes(searchTerm) ||
       `${aiProduct.aiSupplier}`.includes(searchTerm)
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
          <button className="layui-btn" onClick={() => setSearchTerm("")}>
            重置
          </button>
          <button
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
              <th>产品ID</th>
              <th>产品名称</th>
              <th>价格</th>
              <th>库存ID</th>
              <th>供应商</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiProduct) => (
            <tr key={aiProduct.uuid}>
              <td>{aiProduct.aiProductId}</td>
              <td>{aiProduct.aiProductName}</td>
              <td>{aiProduct.aiPrice}</td>
              <td>{aiProduct.aiStock}</td>
              <td>{aiProduct.aiSupplier}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiProduct)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiProduct)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiProduct)}
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
