import React, { useState } from "react";
import data from "../data/ai_flower.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiFlower) => {
    const modalContent = `${UpdateForm({ aiFlower: aiFlower })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiFlower,
              aiFlowerName: layero.find('input[name="aiFlowerName"]').val(), 
              aiFlowerPrice: layero.find('input[name="aiFlowerPrice"]').val(), 
              aiFlowerImage: layero.find('input[name="aiFlowerImage"]').val(), 
              aiFlowerCategory: layero.find('input[name="aiFlowerCategory"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiFlower) => {
    const modalContent = `${DisableForm({ aiFlower: aiFlower })}`;
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

  const handleRemove = (aiFlower) => {
    const modalContent = `${RemoveForm({ aiFlower: aiFlower })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiFlower.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiFlowerName: "",  aiFlowerPrice: "",  aiFlowerImage: "",  aiFlowerCategory: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiFlowerName = layero.find('input[name="aiFlowerName"]').val();
          const aiFlowerPrice = layero.find('input[name="aiFlowerPrice"]').val();
          const aiFlowerImage = layero.find('input[name="aiFlowerImage"]').val();
          const aiFlowerCategory = layero.find('input[name="aiFlowerCategory"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiFlowerName,aiFlowerPrice,aiFlowerImage,aiFlowerCategory, }]);
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