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
      (aiPayments) =>

<<<<<<< HEAD:src/components/aiOrder/List.jsx
       `${aiOrder.customer}`.includes(searchTerm) ||
       `${aiOrder.flower}`.includes(searchTerm) ||
       `${aiOrder.quantity}`.includes(searchTerm)
=======
       `${aiPayments.ai_order_uuid}`.includes(searchTerm) ||
       `${aiPayments.ai_amount}`.includes(searchTerm) ||
       `${aiPayments.ai_payment_date}`.includes(searchTerm) ||
       `${aiPayments.ai_payment_method}`.includes(searchTerm)
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/List.jsx
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
<<<<<<< HEAD:src/components/aiOrder/List.jsx
              <th>客户</th>
              <th>花名</th>
              <th>数量</th>
=======
              <th>订单UUID</th>
              <th>支付金额</th>
              <th>支付日期</th>
              <th>支付方式</th>
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/List.jsx
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD:src/components/aiOrder/List.jsx
          {filteredList.map((aiOrder) => (
            <tr key={aiOrder.uuid}>
              <td>{aiOrder.customer}</td>
              <td>{aiOrder.flower}</td>
              <td>{aiOrder.quantity}</td>
=======
          {filteredList.map((aiPayments) => (
            <tr key={aiPayments.uuid}>
              <td>{aiPayments.ai_order_uuid}</td>
              <td>{aiPayments.ai_amount}</td>
              <td>{aiPayments.ai_payment_date}</td>
              <td>{aiPayments.ai_payment_method}</td>
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/List.jsx
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiPayments)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiPayments)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiPayments)}
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
