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
      (aiUserMenu) =>

       `${aiUserMenu.ai_user_id}`.includes(searchTerm) ||
       `${aiUserMenu.ai_menu_id}`.includes(searchTerm)
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
              <th>用户ID</th>
              <th>菜单ID</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiUserMenu) => (
            <tr key={aiUserMenu.uuid}>
              <td>{aiUserMenu.ai_user_id}</td>
              <td>{aiUserMenu.ai_menu_id}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiUserMenu)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiUserMenu)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiUserMenu)}
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
