import React, { useState } from "react";
import data from "../data/ai_order_details.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrderDetails) => {
    const modalContent = `${UpdateForm({ aiOrderDetails: aiOrderDetails })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrderDetails,
              aiOrderUuid: layero.find('input[name="aiOrderUuid"]').val(), 
              aiItemQuantity: layero.find('input[name="aiItemQuantity"]').val(), 
              aiUnitPrice: layero.find('input[name="aiUnitPrice"]').val(), 
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

  const handleDetail = (aiOrderDetails) => {
    const modalContent = `${DisableForm({ aiOrderDetails: aiOrderDetails })}`;
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

  const handleRemove = (aiOrderDetails) => {
    const modalContent = `${RemoveForm({ aiOrderDetails: aiOrderDetails })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrderDetails.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiOrderUuid: "",  aiItemQuantity: "",  aiUnitPrice: "",  aiTotalPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiOrderUuid = layero.find('input[name="aiOrderUuid"]').val();
          const aiItemQuantity = layero.find('input[name="aiItemQuantity"]').val();
          const aiUnitPrice = layero.find('input[name="aiUnitPrice"]').val();
          const aiTotalPrice = layero.find('input[name="aiTotalPrice"]').val();
           if (
           aiOrderUuid &&

           aiItemQuantity &&

           aiUnitPrice &&

           aiTotalPrice
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiOrderUuid,
          aiItemQuantity,
          aiUnitPrice,
          aiTotalPrice,
           }]);
            layui.layer.close(index);
          } else {
            layui.layer.msg("请填写完整信息", { icon: 5 });
          }
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
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