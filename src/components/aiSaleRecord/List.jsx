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
      (aiSaleRecord) =>

       `${aiSaleRecord.sale_time}`.includes(searchTerm) ||
       `${aiSaleRecord.sale_location}`.includes(searchTerm) ||
       `${aiSaleRecord.customer_name}`.includes(searchTerm) ||
       `${aiSaleRecord.flower_name}`.includes(searchTerm) ||
       `${aiSaleRecord.quantity}`.includes(searchTerm) ||
       `${aiSaleRecord.price_paid}`.includes(searchTerm)
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
              <th>销售时间</th>
              <th>销售地点</th>
              <th>客户姓名</th>
              <th>花卉名称</th>
              <th>销售数量</th>
              <th>本次销售费用</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiSaleRecord) => (
            <tr key={aiSaleRecord.uuid}>
              <td>{aiSaleRecord.sale_time}</td>
              <td>{aiSaleRecord.sale_location}</td>
              <td>{aiSaleRecord.customer_name}</td>
              <td>{aiSaleRecord.flower_name}</td>
              <td>{aiSaleRecord.quantity}</td>
              <td>{aiSaleRecord.price_paid}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiSaleRecord)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiSaleRecord)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiSaleRecord)}
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
