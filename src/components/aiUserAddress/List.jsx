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
      (aiUserAddress) =>

       `${aiUserAddress.ai_user_uuid}`.includes(searchTerm) ||
       `${aiUserAddress.ai_address}`.includes(searchTerm) ||
       `${aiUserAddress.ai_name}`.includes(searchTerm) ||
       `${aiUserAddress.ai_phone}`.includes(searchTerm)
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
              <th>地址</th>
              <th>收货人姓名</th>
              <th>电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiUserAddress) => (
            <tr key={aiUserAddress.uuid}>
              <td>{aiUserAddress.ai_user_uuid}</td>
              <td>{aiUserAddress.ai_address}</td>
              <td>{aiUserAddress.ai_name}</td>
              <td>{aiUserAddress.ai_phone}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiUserAddress)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiUserAddress)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiUserAddress)}
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
