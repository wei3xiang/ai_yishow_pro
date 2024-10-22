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
      (aiDish) =>

       `${aiDish.aiName}`.includes(searchTerm) ||
       `${aiDish.aiCategory}`.includes(searchTerm) ||
       `${aiDish.aiPrice}`.includes(searchTerm) ||
       `${aiDish.aiDescription}`.includes(searchTerm)
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
              <th>菜品名称</th>
              <th>类别</th>
              <th>价格</th>
              <th>描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiDish) => (
            <tr key={aiDish.uuid}>
              <td>{aiDish.aiName}</td>
              <td>{aiDish.aiCategory}</td>
              <td>{aiDish.aiPrice}</td>
              <td>{aiDish.aiDescription}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiDish)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiDish)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiDish)}
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
