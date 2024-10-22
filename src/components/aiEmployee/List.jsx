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

       `${aiEmployee.aiEmployeeName}`.includes(searchTerm) ||
       `${aiEmployee.aiEmployeeEmail}`.includes(searchTerm) ||
       `${aiEmployee.aiEmployeePhone}`.includes(searchTerm) ||
       `${aiEmployee.aiEmployeeAddress}`.includes(searchTerm)
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
              <th>员工姓名</th>
              <th>员工邮箱</th>
              <th>员工电话</th>
              <th>员工地址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiEmployee) => (
            <tr key={aiEmployee.uuid}>
              <td>{aiEmployee.aiEmployeeName}</td>
              <td>{aiEmployee.aiEmployeeEmail}</td>
              <td>{aiEmployee.aiEmployeePhone}</td>
              <td>{aiEmployee.aiEmployeeAddress}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiEmployee)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiEmployee)}
                >
                  编辑
                </button>
                <button
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
