import React, { useState } from "react";
import data from "../data/ai_product_stock.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiProductStock) => {
    const modalContent = `${UpdateForm({ aiProductStock: aiProductStock })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiProductStock,
              ai_product_uuid: layero.find('input[name="ai_product_uuid"]').val(),
              ai_current_quantity: layero.find('input[name="ai_current_quantity"]').val(),
              ai_minimum_quantity: layero.find('input[name="ai_minimum_quantity"]').val(),
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiProductStock) => {
    const modalContent = `${DisableForm({ aiProductStock: aiProductStock })}`;
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

  const handleRemove = (aiProductStock) => {
    const modalContent = `${RemoveForm({ aiProductStock: aiProductStock })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiProductStock.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  ai_product_uuid: "",  ai_current_quantity: "",  ai_minimum_quantity: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const ai_product_uuid = layero.find('input[name="ai_product_uuid"]').val();
          const ai_current_quantity = layero.find('input[name="ai_current_quantity"]').val();
          const ai_minimum_quantity = layero.find('input[name="ai_minimum_quantity"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), ai_product_uuid,ai_current_quantity,ai_minimum_quantity, }]);
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
