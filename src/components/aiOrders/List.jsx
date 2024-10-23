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
      (aiOrders) =>

       `${aiOrders.ai_order_no}`.includes(searchTerm) ||
       `${aiOrders.ai_user_uuid}`.includes(searchTerm) ||
       `${aiOrders.ai_item_uuid}`.includes(searchTerm) ||
       `${aiOrders.ai_quantity}`.includes(searchTerm) ||
       `${aiOrders.ai_order_date}`.includes(searchTerm) ||
       `${aiOrders.ai_order_status}`.includes(searchTerm)
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
              <th>订单号</th>
              <th>用户UUID</th>
              <th>物品UUID</th>
              <th>订购数量</th>
              <th>订单日期</th>
              <th>订单状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrders) => (
            <tr key={aiOrders.uuid}>
              <td>{aiOrders.ai_order_no}</td>
              <td>{aiOrders.ai_user_uuid}</td>
              <td>{aiOrders.ai_item_uuid}</td>
              <td>{aiOrders.ai_quantity}</td>
              <td>{aiOrders.ai_order_date}</td>
              <td>{aiOrders.ai_order_status}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiOrders)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiOrders)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiOrders)}
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
