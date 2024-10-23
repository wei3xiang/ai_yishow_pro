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
              aiProductId: layero.find('input[name="aiProductId"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiSupplier: layero.find('input[name="aiSupplier"]').val(), 
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
    const newItem = { uuid: "",  aiProductId: "",  aiProductName: "",  aiQuantity: "",  aiSupplier: "",  aiPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiProductId = layero.find('input[name="aiProductId"]').val();
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiSupplier = layero.find('input[name="aiSupplier"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiProductId,aiProductName,aiQuantity,aiSupplier,aiPrice, }]);
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
