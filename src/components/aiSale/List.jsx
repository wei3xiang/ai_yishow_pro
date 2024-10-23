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
      (aiSale) =>

       `${aiSale.ai_sale_number}`.includes(searchTerm) ||
       `${aiSale.ai_shop_number}`.includes(searchTerm) ||
       `${aiSale.ai_sale_date}`.includes(searchTerm) ||
       `${aiSale.ai_revenue}`.includes(searchTerm) ||
       `${aiSale.ai_customer_name}`.includes(searchTerm) ||
       `${aiSale.ai_customer_phone}`.includes(searchTerm) ||
       `${aiSale.ai_product_number}`.includes(searchTerm)
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
              <th>销售编号</th>
              <th>花店编号</th>
              <th>销售日期</th>
              <th>销售金额</th>
              <th>客户姓名</th>
              <th>客户电话</th>
              <th>商品编号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiSale) => (
            <tr key={aiSale.uuid}>
              <td>{aiSale.ai_sale_number}</td>
              <td>{aiSale.ai_shop_number}</td>
              <td>{aiSale.ai_sale_date}</td>
              <td>{aiSale.ai_revenue}</td>
              <td>{aiSale.ai_customer_name}</td>
              <td>{aiSale.ai_customer_phone}</td>
              <td>{aiSale.ai_product_number}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiSale)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiSale)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiSale)}
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
