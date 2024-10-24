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
      (aiVendor) =>

       `${aiVendor.vendor_name}`.includes(searchTerm) ||
       `${aiVendor.vendor_phone}`.includes(searchTerm) ||
       `${aiVendor.vendor_email}`.includes(searchTerm) ||
       `${aiVendor.vendor_address}`.includes(searchTerm) ||
       `${aiVendor.vendor_website}`.includes(searchTerm)
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
              <th>商家名称</th>
              <th>商家联系电话</th>
              <th>商家邮箱</th>
              <th>商家地址</th>
              <th>商家官网</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiVendor) => (
            <tr key={aiVendor.uuid}>
              <td>{aiVendor.vendor_name}</td>
              <td>{aiVendor.vendor_phone}</td>
              <td>{aiVendor.vendor_email}</td>
              <td>{aiVendor.vendor_address}</td>
              <td>{aiVendor.vendor_website}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiVendor)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiVendor)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiVendor)}
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
