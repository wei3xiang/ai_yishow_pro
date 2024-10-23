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
      (aiEmployee) =>

       `${aiEmployee.ai_employee_number}`.includes(searchTerm) ||
       `${aiEmployee.ai_name}`.includes(searchTerm) ||
       `${aiEmployee.ai_title}`.includes(searchTerm) ||
       `${aiEmployee.ai_email}`.includes(searchTerm) ||
       `${aiEmployee.ai_phone}`.includes(searchTerm) ||
       `${aiEmployee.ai_shop_number}`.includes(searchTerm)
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
              <th>员工编号</th>
              <th>员工姓名</th>
              <th>员工职位</th>
              <th>员工邮箱</th>
              <th>员工电话</th>
              <th>花店编号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiEmployee) => (
            <tr key={aiEmployee.uuid}>
              <td>{aiEmployee.ai_employee_number}</td>
              <td>{aiEmployee.ai_name}</td>
              <td>{aiEmployee.ai_title}</td>
              <td>{aiEmployee.ai_email}</td>
              <td>{aiEmployee.ai_phone}</td>
              <td>{aiEmployee.ai_shop_number}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiEmployee)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiEmployee)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiEmployee)}
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
