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
      (aiMealRecord) =>

       `${aiMealRecord.aiUserId}`.includes(searchTerm) ||
       `${aiMealRecord.aiOrderId}`.includes(searchTerm) ||
       `${aiMealRecord.aiMealDate}`.includes(searchTerm) ||
       `${aiMealRecord.aiMealTime}`.includes(searchTerm) ||
       `${aiMealRecord.aiProductId}`.includes(searchTerm) ||
       `${aiMealRecord.aiQuantity}`.includes(searchTerm)
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
              <th>用户ID</th>
              <th>订单ID</th>
              <th>用餐日期</th>
              <th>用餐时间</th>
              <th>商品ID</th>
              <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiMealRecord) => (
            <tr key={aiMealRecord.uuid}>
              <td>{aiMealRecord.aiUserId}</td>
              <td>{aiMealRecord.aiOrderId}</td>
              <td>{aiMealRecord.aiMealDate}</td>
              <td>{aiMealRecord.aiMealTime}</td>
              <td>{aiMealRecord.aiProductId}</td>
              <td>{aiMealRecord.aiQuantity}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiMealRecord)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiMealRecord)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiMealRecord)}
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
