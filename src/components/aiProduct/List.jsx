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

       `${aiProduct.product_name}`.includes(searchTerm) ||
       `${aiProduct.product_description}`.includes(searchTerm) ||
       `${aiProduct.product_price}`.includes(searchTerm) ||
       `${aiProduct.product_stock}`.includes(searchTerm) ||
       `${aiProduct.product_category}`.includes(searchTerm) ||
       `${aiProduct.product_image}`.includes(searchTerm)
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
              <th>商品名称</th>
              <th>商品描述</th>
              <th>商品价格</th>
              <th>商品库存</th>
              <th>商品分类</th>
              <th>商品图片地址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiProduct) => (
            <tr key={aiProduct.uuid}>
              <td>{aiProduct.product_name}</td>
              <td>{aiProduct.product_description}</td>
              <td>{aiProduct.product_price}</td>
              <td>{aiProduct.product_stock}</td>
              <td>{aiProduct.product_category}</td>
              <td>{aiProduct.product_image}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiProduct)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiProduct)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
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
