import React, { useState } from "react";
import data from "../data/ai_order_item.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrderItem) => {
    const modalContent = `${UpdateForm({ aiOrderItem: aiOrderItem })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrderItem,
              aiOrderId: layero.find('input[name="aiOrderId"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiPrice: layero.find('input[name="aiPrice"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrderItem) => {
    const modalContent = `${DisableForm({ aiOrderItem: aiOrderItem })}`;
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

  const handleRemove = (aiOrderItem) => {
    const modalContent = `${RemoveForm({ aiOrderItem: aiOrderItem })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrderItem.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiOrderId: "",  aiProductName: "",  aiQuantity: "",  aiPrice: "", };
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
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
           if (
           aiOrderId &&

           aiProductName &&

           aiQuantity &&

           aiPrice
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiOrderId,
          aiProductName,
          aiQuantity,
          aiPrice,
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
