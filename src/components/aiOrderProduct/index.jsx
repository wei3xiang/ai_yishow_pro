import React, { useState } from "react";
import data from "../data/ai_order_product.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrderProduct) => {
    const modalContent = `${UpdateForm({ aiOrderProduct: aiOrderProduct })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrderProduct,
              ai_order_uuid: layero.find('input[name="ai_order_uuid"]').val(),
              ai_product_uuid: layero.find('input[name="ai_product_uuid"]').val(),
              ai_quantity: layero.find('input[name="ai_quantity"]').val(),
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrderProduct) => {
    const modalContent = `${DisableForm({ aiOrderProduct: aiOrderProduct })}`;
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

  const handleRemove = (aiOrderProduct) => {
    const modalContent = `${RemoveForm({ aiOrderProduct: aiOrderProduct })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrderProduct.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  ai_order_uuid: "",  ai_product_uuid: "",  ai_quantity: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const ai_order_uuid = layero.find('input[name="ai_order_uuid"]').val();
          const ai_product_uuid = layero.find('input[name="ai_product_uuid"]').val();
          const ai_quantity = layero.find('input[name="ai_quantity"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), ai_order_uuid,ai_product_uuid,ai_quantity, }]);
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
