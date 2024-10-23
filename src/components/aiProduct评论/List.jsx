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
      (aiProduct评论) =>

       `${aiProduct评论.ai_product_id}`.includes(searchTerm) ||
       `${aiProduct评论.ai_user_id}`.includes(searchTerm) ||
       `${aiProduct评论.ai_content}`.includes(searchTerm) ||
       `${aiProduct评论.ai_rating}`.includes(searchTerm) ||
       `${aiProduct评论.ai_created_at}`.includes(searchTerm)
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
              <th>产品ID</th>
              <th>用户ID</th>
              <th>评论内容</th>
              <th>评分</th>
              <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiProduct评论) => (
            <tr key={aiProduct评论.uuid}>
              <td>{aiProduct评论.ai_product_id}</td>
              <td>{aiProduct评论.ai_user_id}</td>
              <td>{aiProduct评论.ai_content}</td>
              <td>{aiProduct评论.ai_rating}</td>
              <td>{aiProduct评论.ai_created_at}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiProduct评论)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiProduct评论)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiProduct评论)}
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
