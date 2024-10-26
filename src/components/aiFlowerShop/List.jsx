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
      (aiFlowerShop) =>

       `${aiFlowerShop.shop_name}`.includes(searchTerm) ||
       `${aiFlowerShop.shop_location}`.includes(searchTerm) ||
       `${aiFlowerShop.contact_name}`.includes(searchTerm) ||
       `${aiFlowerShop.contact_phone}`.includes(searchTerm) ||
       `${aiFlowerShop.opening_hours}`.includes(searchTerm)
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
              <th>花店名称</th>
              <th>花店所在地</th>
              <th>联系人名称</th>
              <th>联系人电话</th>
              <th>营业时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiFlowerShop) => (
            <tr key={aiFlowerShop.uuid}>
              <td>{aiFlowerShop.shop_name}</td>
              <td>{aiFlowerShop.shop_location}</td>
              <td>{aiFlowerShop.contact_name}</td>
              <td>{aiFlowerShop.contact_phone}</td>
              <td>{aiFlowerShop.opening_hours}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiFlowerShop)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiFlowerShop)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiFlowerShop)}
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
