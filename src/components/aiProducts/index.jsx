import React, { useState } from "react";
import data from "../data/ai_products.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiProducts) => {
    const modalContent = `${UpdateForm({ aiProducts: aiProducts })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiProducts,
              aiName: layero.find('input[name="aiName"]').val(), 
              aiCategory: layero.find('input[name="aiCategory"]').val(), 
              aiPrice: layero.find('input[name="aiPrice"]').val(), 
              aiStock: layero.find('input[name="aiStock"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiProducts) => {
    const modalContent = `${DisableForm({ aiProducts: aiProducts })}`;
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

  const handleRemove = (aiProducts) => {
    const modalContent = `${RemoveForm({ aiProducts: aiProducts })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiProducts.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiName: "",  aiCategory: "",  aiPrice: "",  aiStock: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiName = layero.find('input[name="aiName"]').val();
          const aiCategory = layero.find('input[name="aiCategory"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
          const aiStock = layero.find('input[name="aiStock"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiName,aiCategory,aiPrice,aiStock, }]);
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
