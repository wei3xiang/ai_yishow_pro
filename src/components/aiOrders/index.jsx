import React, { useState } from "react";
import data from "../data/ai_orders.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrders) => {
    const modalContent = `${UpdateForm({ aiOrders: aiOrders })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrders,
              aiOrderNo: layero.find('input[name="aiOrderNo"]').val(), 
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiItemUuid: layero.find('input[name="aiItemUuid"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiOrderDate: layero.find('input[name="aiOrderDate"]').val(), 
              aiOrderStatus: layero.find('input[name="aiOrderStatus"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrders) => {
    const modalContent = `${DisableForm({ aiOrders: aiOrders })}`;
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

  const handleRemove = (aiOrders) => {
    const modalContent = `${RemoveForm({ aiOrders: aiOrders })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrders.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiOrderNo: "",  aiUserUuid: "",  aiItemUuid: "",  aiQuantity: "",  aiOrderDate: "",  aiOrderStatus: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiOrderNo = layero.find('input[name="aiOrderNo"]').val();
          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiItemUuid = layero.find('input[name="aiItemUuid"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiOrderDate = layero.find('input[name="aiOrderDate"]').val();
          const aiOrderStatus = layero.find('input[name="aiOrderStatus"]').val();
           if (
           aiOrderNo &&

           aiUserUuid &&

           aiItemUuid &&

           aiQuantity &&

           aiOrderDate &&

           aiOrderStatus
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiOrderNo,
          aiUserUuid,
          aiItemUuid,
          aiQuantity,
          aiOrderDate,
          aiOrderStatus,
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
