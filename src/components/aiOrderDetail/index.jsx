import React, { useState } from "react";
import data from "../data/ai_order_detail.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrderDetail) => {
    const modalContent = `${UpdateForm({ aiOrderDetail: aiOrderDetail })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrderDetail,
              aiOrderId: layero.find('input[name="aiOrderId"]').val(), 
              aiFlowerTypeId: layero.find('input[name="aiFlowerTypeId"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiTotalPrice: layero.find('input[name="aiTotalPrice"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrderDetail) => {
    const modalContent = `${DisableForm({ aiOrderDetail: aiOrderDetail })}`;
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

  const handleRemove = (aiOrderDetail) => {
    const modalContent = `${RemoveForm({ aiOrderDetail: aiOrderDetail })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrderDetail.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiOrderId: "",  aiFlowerTypeId: "",  aiQuantity: "",  aiTotalPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiOrderId = layero.find('input[name="aiOrderId"]').val();
          const aiFlowerTypeId = layero.find('input[name="aiFlowerTypeId"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiTotalPrice = layero.find('input[name="aiTotalPrice"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiOrderId,aiFlowerTypeId,aiQuantity,aiTotalPrice, }]);
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
