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
      (aiDeliveryAddress) =>

       `${aiDeliveryAddress.aiCustomerUuid}`.includes(searchTerm) ||
       `${aiDeliveryAddress.aiAddressType}`.includes(searchTerm) ||
       `${aiDeliveryAddress.aiName}`.includes(searchTerm) ||
       `${aiDeliveryAddress.aiPhone}`.includes(searchTerm) ||
       `${aiDeliveryAddress.aiAddress}`.includes(searchTerm)
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
              <th>客户UUID</th>
              <th>地址类型 (如：收货地址, 发货地址)</th>
              <th>收件人姓名</th>
              <th>电话</th>
              <th>详细地址</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((aiDeliveryAddress) => (
            <tr key={aiDeliveryAddress.uuid}>
              <td>{aiDeliveryAddress.aiCustomerUuid}</td>
              <td>{aiDeliveryAddress.aiAddressType}</td>
              <td>{aiDeliveryAddress.aiName}</td>
              <td>{aiDeliveryAddress.aiPhone}</td>
              <td>{aiDeliveryAddress.aiAddress}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => onClickDetail(aiDeliveryAddress)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => onClickUpdate(aiDeliveryAddress)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => onClickRemove(aiDeliveryAddress)}
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
