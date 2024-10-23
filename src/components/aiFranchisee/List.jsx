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
      (aiFranchisee) =>

       `${aiFranchisee.ai_franchisee_name}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_contact}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_phone}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_address}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_status}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_start_date}`.includes(searchTerm) ||
       `${aiFranchisee.ai_franchisee_end_date}`.includes(searchTerm)
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
              <th>加盟商名称</th>
              <th>加盟商联系人</th>
              <th>加盟商联系电话</th>
              <th>加盟商地址</th>
              <th>加盟商状态 (0-待审核, 1-审核通过, 2-审核不通过)</th>
              <th>加盟商开始合作日期</th>
              <th>加盟商结束合作日期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiFranchisee) => (
            <tr key={aiFranchisee.uuid}>
              <td>{aiFranchisee.ai_franchisee_name}</td>
              <td>{aiFranchisee.ai_franchisee_contact}</td>
              <td>{aiFranchisee.ai_franchisee_phone}</td>
              <td>{aiFranchisee.ai_franchisee_address}</td>
              <td>{aiFranchisee.ai_franchisee_status}</td>
              <td>{aiFranchisee.ai_franchisee_start_date}</td>
              <td>{aiFranchisee.ai_franchisee_end_date}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiFranchisee)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiFranchisee)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiFranchisee)}
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
