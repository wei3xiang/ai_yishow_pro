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

       `${aiOrders.ai_user_uuid}`.includes(searchTerm) ||
       `${aiOrders.ai_goods_uuid}`.includes(searchTerm) ||
       `${aiOrders.ai_order_time}`.includes(searchTerm) ||
       `${aiOrders.ai_total_price}`.includes(searchTerm)
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
              <th>客户uuid</th>
              <th>商品uuid</th>
              <th>订单创建时间</th>
              <th>订单总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrders) => (
            <tr key={aiOrders.uuid}>
              <td>{aiOrders.ai_user_uuid}</td>
              <td>{aiOrders.ai_goods_uuid}</td>
              <td>{aiOrders.ai_order_time}</td>
              <td>{aiOrders.ai_total_price}</td>
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
