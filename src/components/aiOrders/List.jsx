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

       `${aiOrders.aiOrderId}`.includes(searchTerm) ||
       `${aiOrders.aiUserUuid}`.includes(searchTerm) ||
       `${aiOrders.aiOrderStatus}`.includes(searchTerm) ||
       `${aiOrders.aiTotalAmount}`.includes(searchTerm) ||
       `${aiOrders.aiOrderCreateTime}`.includes(searchTerm) ||
       `${aiOrders.aiLastUpdate}`.includes(searchTerm)
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
              <th>用户ID（关联ai_user表中的uuid）</th>
              <th>订单状态</th>
              <th>订单金额</th>
              <th>订单创建时间</th>
              <th>最后更新时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrders) => (
            <tr key={aiOrders.uuid}>
              <td>{aiOrders.aiOrderId}</td>
              <td>{aiOrders.aiUserUuid}</td>
              <td>{aiOrders.aiOrderStatus}</td>
              <td>{aiOrders.aiTotalAmount}</td>
              <td>{aiOrders.aiOrderCreateTime}</td>
              <td>{aiOrders.aiLastUpdate}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiOrders)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiOrders)}
                >
                  编辑
                </button>
                <button
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
