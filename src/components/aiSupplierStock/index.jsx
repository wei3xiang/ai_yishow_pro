import React, { useState } from "react";
import data from "../data/ai_supplier_stock.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiSupplierStock) => {
    const modalContent = `${UpdateForm({ aiSupplierStock: aiSupplierStock })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiSupplierStock,
              aiFlowerUuid: layero.find('input[name="aiFlowerUuid"]').val(), 
              aiSupplierUuid: layero.find('input[name="aiSupplierUuid"]').val(), 
              aiStockCount: layero.find('input[name="aiStockCount"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiSupplierStock) => {
    const modalContent = `${DisableForm({ aiSupplierStock: aiSupplierStock })}`;
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

  const handleRemove = (aiSupplierStock) => {
    const modalContent = `${RemoveForm({ aiSupplierStock: aiSupplierStock })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiSupplierStock.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiFlowerUuid: "",  aiSupplierUuid: "",  aiStockCount: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiFlowerUuid = layero.find('input[name="aiFlowerUuid"]').val();
          const aiSupplierUuid = layero.find('input[name="aiSupplierUuid"]').val();
          const aiStockCount = layero.find('input[name="aiStockCount"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiFlowerUuid,aiSupplierUuid,aiStockCount, }]);
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
