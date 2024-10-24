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
      (aiPromotion) =>

       `${aiPromotion.ai_promotion_name}`.includes(searchTerm) ||
       `${aiPromotion.ai_start_date}`.includes(searchTerm) ||
       `${aiPromotion.ai_end_date}`.includes(searchTerm) ||
       `${aiPromotion.ai_discount}`.includes(searchTerm) ||
       `${aiPromotion.ai_validity}`.includes(searchTerm) ||
       `${aiPromotion.ai_creation_time}`.includes(searchTerm)
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
              <th>促销活动名称</th>
              <th>促销开始日期</th>
              <th>促销结束日期</th>
              <th>折扣率</th>
              <th>适用时间</th>
              <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiPromotion) => (
            <tr key={aiPromotion.uuid}>
              <td>{aiPromotion.ai_promotion_name}</td>
              <td>{aiPromotion.ai_start_date}</td>
              <td>{aiPromotion.ai_end_date}</td>
              <td>{aiPromotion.ai_discount}</td>
              <td>{aiPromotion.ai_validity}</td>
              <td>{aiPromotion.ai_creation_time}</td>
              <td>
                <button
                  style={{ marginLeft: "10px", marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiPromotion)}
                >
                  查看
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiPromotion)}
                >
                  编辑
                </button>
                <button
                  style={{ marginTop: "2px" }}
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiPromotion)}
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
