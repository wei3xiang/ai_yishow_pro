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
      (aiBeer) =>

       `${aiBeer.ai_brewery_uuid}`.includes(searchTerm) ||
       `${aiBeer.ai_name}`.includes(searchTerm) ||
       `${aiBeer.ai_style}`.includes(searchTerm) ||
       `${aiBeer.ai_abv}`.includes(searchTerm) ||
       `${aiBeer.ai_ibu}`.includes(searchTerm)
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
              <th>酿造商的 UUID</th>
              <th>啤酒名称</th>
              <th>啤酒风格</th>
              <th>酒精度</th>
              <th>绝苦值</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiBeer) => (
            <tr key={aiBeer.uuid}>
              <td>{aiBeer.ai_brewery_uuid}</td>
              <td>{aiBeer.ai_name}</td>
              <td>{aiBeer.ai_style}</td>
              <td>{aiBeer.ai_abv}</td>
              <td>{aiBeer.ai_ibu}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiBeer)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiBeer)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiBeer)}
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
