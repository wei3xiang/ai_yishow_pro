import React, { useState } from "react";
import data from "../data/ai_inventory.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiInventory) => {
    const modalContent = `${UpdateForm({ aiInventory: aiInventory })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiInventory,
              aiItemId: layero.find('input[name="aiItemId"]').val(), 
              aiItemName: layero.find('input[name="aiItemName"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiPurchasePrice: layero.find('input[name="aiPurchasePrice"]').val(), 
              aiSalePrice: layero.find('input[name="aiSalePrice"]').val(), 
              aiSupplier: layero.find('input[name="aiSupplier"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiInventory) => {
    const modalContent = `${DisableForm({ aiInventory: aiInventory })}`;
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

  const handleRemove = (aiInventory) => {
    const modalContent = `${RemoveForm({ aiInventory: aiInventory })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiInventory.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiItemId: "",  aiItemName: "",  aiQuantity: "",  aiPurchasePrice: "",  aiSalePrice: "",  aiSupplier: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiItemId = layero.find('input[name="aiItemId"]').val();
          const aiItemName = layero.find('input[name="aiItemName"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiPurchasePrice = layero.find('input[name="aiPurchasePrice"]').val();
          const aiSalePrice = layero.find('input[name="aiSalePrice"]').val();
          const aiSupplier = layero.find('input[name="aiSupplier"]').val();
           if (
           aiItemId &&

           aiItemName &&

           aiQuantity &&

           aiPurchasePrice &&

           aiSalePrice &&

           
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiItemId,
          aiItemName,
          aiQuantity,
          aiPurchasePrice,
          aiSalePrice,
          aiSupplier,
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
