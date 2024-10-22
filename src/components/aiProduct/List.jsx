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
      (aiProduct) =>

       `${aiProduct.ai_name}`.includes(searchTerm) ||
       `${aiProduct.ai_description}`.includes(searchTerm) ||
       `${aiProduct.ai_price}`.includes(searchTerm) ||
       `${aiProduct.ai_stock}`.includes(searchTerm) ||
       `${aiProduct.ai_category}`.includes(searchTerm)
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
              <th>商品名称</th>
              <th>商品描述</th>
              <th>单价</th>
              <th>库存数量</th>
              <th>商品类别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiProduct) => (
            <tr key={aiProduct.uuid}>
              <td>{aiProduct.ai_name}</td>
              <td>{aiProduct.ai_description}</td>
              <td>{aiProduct.ai_price}</td>
              <td>{aiProduct.ai_stock}</td>
              <td>{aiProduct.ai_category}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiProduct)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiProduct)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiProduct)}
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
