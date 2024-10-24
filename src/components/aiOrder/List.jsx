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

       `${aiOrder.ai_order_number}`.includes(searchTerm) ||
       `${aiOrder.ai_customer_name}`.includes(searchTerm) ||
       `${aiOrder.ai_total_amount}`.includes(searchTerm) ||
       `${aiOrder.ai_order_date}`.includes(searchTerm) ||
       `${aiOrder.ai_room_id}`.includes(searchTerm) ||
       `${aiOrder.ai_employee_id}`.includes(searchTerm)
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
              <th>订单编号</th>
              <th>客户姓名</th>
              <th>总金额（单位：元）</th>
              <th>订单日期</th>
              <th>房间ID</th>
              <th>关联员工ID</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiOrder) => (
            <tr key={aiOrder.uuid}>
              <td>{aiOrder.ai_order_number}</td>
              <td>{aiOrder.ai_customer_name}</td>
              <td>{aiOrder.ai_total_amount}</td>
              <td>{aiOrder.ai_order_date}</td>
              <td>{aiOrder.ai_room_id}</td>
              <td>{aiOrder.ai_employee_id}</td>
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
