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
      (aiOrder) =>

       `${aiOrder.ai_user_uuid}`.includes(searchTerm) ||
       `${aiOrder.ai_order_number}`.includes(searchTerm) ||
       `${aiOrder.ai_order_date}`.includes(searchTerm) ||
       `${aiOrder.ai_total_amount}`.includes(searchTerm) ||
       `${aiOrder.ai_order_status}`.includes(searchTerm) ||
       `${aiOrder.ai_payment_method}`.includes(searchTerm) ||
       `${aiOrder.ai_creation_time}`.includes(searchTerm)
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
              <th>用户UUID</th>
              <th>订单号</th>
              <th>订单日期</th>
              <th>订单总金额</th>
              <th>订单状态</th>
              <th>支付方式</th>
              <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrder) => (
            <tr key={aiOrder.uuid}>
              <td>{aiOrder.ai_user_uuid}</td>
              <td>{aiOrder.ai_order_number}</td>
              <td>{aiOrder.ai_order_date}</td>
              <td>{aiOrder.ai_total_amount}</td>
              <td>{aiOrder.ai_order_status}</td>
              <td>{aiOrder.ai_payment_method}</td>
              <td>{aiOrder.ai_creation_time}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiOrder)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiOrder)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiOrder)}
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
