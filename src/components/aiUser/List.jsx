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
      (aiUser) =>

       `${aiUser.aiUsername}`.includes(searchTerm) ||
       `${aiUser.aiPassword}`.includes(searchTerm) ||
       `${aiUser.aiEmail}`.includes(searchTerm) ||
       `${aiUser.aiPhone}`.includes(searchTerm) ||
       `${aiUser.aiAddress}`.includes(searchTerm) ||
       `${aiUser.aiRegisteredAt}`.includes(searchTerm)
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
              <th>用户名</th>
              <th>密码</th>
              <th>邮箱</th>
              <th>电话</th>
              <th>地址</th>
              <th>注册时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiUser) => (
            <tr key={aiUser.uuid}>
              <td>{aiUser.aiUsername}</td>
              <td>{aiUser.aiPassword}</td>
              <td>{aiUser.aiEmail}</td>
              <td>{aiUser.aiPhone}</td>
              <td>{aiUser.aiAddress}</td>
              <td>{aiUser.aiRegisteredAt}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiUser)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiUser)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiUser)}
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
