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
      (aiFeedback) =>

       `${aiFeedback.ai_user_uuid}`.includes(searchTerm) ||
       `${aiFeedback.ai_feedback_content}`.includes(searchTerm) ||
       `${aiFeedback.ai_score}`.includes(searchTerm) ||
       `${aiFeedback.ai_feedback_status}`.includes(searchTerm) ||
       `${aiFeedback.ai_creation_time}`.includes(searchTerm)
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
              <th>用户UUID</th>
              <th>反馈内容</th>
              <th>评分</th>
              <th>反馈状态</th>
              <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiFeedback) => (
            <tr key={aiFeedback.uuid}>
              <td>{aiFeedback.ai_user_uuid}</td>
              <td>{aiFeedback.ai_feedback_content}</td>
              <td>{aiFeedback.ai_score}</td>
              <td>{aiFeedback.ai_feedback_status}</td>
              <td>{aiFeedback.ai_creation_time}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiFeedback)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiFeedback)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiFeedback)}
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
