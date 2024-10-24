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
      (aiOrderDetail) =>

       `${aiOrderDetail.ai_order_uuid}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_item_name}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_item_id}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_quantity}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_unit_price}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_sub_total_amount}`.includes(searchTerm) ||
       `${aiOrderDetail.ai_creation_time}`.includes(searchTerm)
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
              <th>订单UUID</th>
              <th>商品名称</th>
              <th>商品ID</th>
              <th>数量</th>
              <th>单价</th>
              <th>小计</th>
              <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrderDetail) => (
            <tr key={aiOrderDetail.uuid}>
              <td>{aiOrderDetail.ai_order_uuid}</td>
              <td>{aiOrderDetail.ai_item_name}</td>
              <td>{aiOrderDetail.ai_item_id}</td>
              <td>{aiOrderDetail.ai_quantity}</td>
              <td>{aiOrderDetail.ai_unit_price}</td>
              <td>{aiOrderDetail.ai_sub_total_amount}</td>
              <td>{aiOrderDetail.ai_creation_time}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiOrderDetail)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiOrderDetail)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiOrderDetail)}
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