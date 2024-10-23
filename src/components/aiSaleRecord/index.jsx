import React, { useState } from "react";
import data from "../data/ai_sale_record.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiSaleRecord) => {
    const modalContent = `${UpdateForm({ aiSaleRecord: aiSaleRecord })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiSaleRecord,
              saleTime: layero.find('input[name="saleTime"]').val(), 
              saleLocation: layero.find('input[name="saleLocation"]').val(), 
              customerName: layero.find('input[name="customerName"]').val(), 
              flowerName: layero.find('input[name="flowerName"]').val(), 
              quantity: layero.find('input[name="quantity"]').val(), 
              pricePaid: layero.find('input[name="pricePaid"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiSaleRecord) => {
    const modalContent = `${DisableForm({ aiSaleRecord: aiSaleRecord })}`;
    layui.layer.open({
      type: 1,
      title: "查看",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
      },
    });
  };

  const handleRemove = (aiSaleRecord) => {
    const modalContent = `${RemoveForm({ aiSaleRecord: aiSaleRecord })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiSaleRecord.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  saleTime: "",  saleLocation: "",  customerName: "",  flowerName: "",  quantity: "",  pricePaid: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const saleTime = layero.find('input[name="saleTime"]').val();
          const saleLocation = layero.find('input[name="saleLocation"]').val();
          const customerName = layero.find('input[name="customerName"]').val();
          const flowerName = layero.find('input[name="flowerName"]').val();
          const quantity = layero.find('input[name="quantity"]').val();
          const pricePaid = layero.find('input[name="pricePaid"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), saleTime,saleLocation,customerName,flowerName,quantity,pricePaid, }]);
          layui.layer.close(index);
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
      <List
        data = {list}
        onClickCreate={() => handleCreate()}
        onClickRemove={(user) => handleRemove(user)}
        onClickDetail={(user) => handleDetail(user)}
        onClickUpdate={(user) => handleEdit(user)}
      />
    </div>
  );
};

export default Index;
