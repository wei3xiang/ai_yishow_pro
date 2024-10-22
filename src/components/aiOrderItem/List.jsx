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
      (aiOrderItem) =>

       `${aiOrderItem.aiOrderUuid}`.includes(searchTerm) ||
       `${aiOrderItem.aiProductName}`.includes(searchTerm) ||
       `${aiOrderItem.aiProductId}`.includes(searchTerm) ||
       `${aiOrderItem.aiQuantity}`.includes(searchTerm) ||
       `${aiOrderItem.aiUnitPrice}`.includes(searchTerm)
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
              <th>订单UUID</th>
              <th>商品名称</th>
              <th>商品ID</th>
              <th>商品数量</th>
              <th>商品单价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrderItem) => (
            <tr key={aiOrderItem.uuid}>
              <td>{aiOrderItem.aiOrderUuid}</td>
              <td>{aiOrderItem.aiProductName}</td>
              <td>{aiOrderItem.aiProductId}</td>
              <td>{aiOrderItem.aiQuantity}</td>
              <td>{aiOrderItem.aiUnitPrice}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiOrderItem)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiOrderItem)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiOrderItem)}
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
