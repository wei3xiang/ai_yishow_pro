import React, { useState } from "react";
import data from "../data/ai_flower_info.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiFlowerInfo) => {
    const modalContent = `${UpdateForm({ aiFlowerInfo: aiFlowerInfo })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiFlowerInfo,
              flowerName: layero.find('input[name="flowerName"]').val(), 
              flowerType: layero.find('input[name="flowerType"]').val(), 
              originCountry: layero.find('input[name="originCountry"]').val(), 
              price: layero.find('input[name="price"]').val(), 
              stock: layero.find('input[name="stock"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiFlowerInfo) => {
    const modalContent = `${DisableForm({ aiFlowerInfo: aiFlowerInfo })}`;
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

  const handleRemove = (aiFlowerInfo) => {
    const modalContent = `${RemoveForm({ aiFlowerInfo: aiFlowerInfo })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiFlowerInfo.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  flowerName: "",  flowerType: "",  originCountry: "",  price: "",  stock: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const flowerName = layero.find('input[name="flowerName"]').val();
          const flowerType = layero.find('input[name="flowerType"]').val();
          const originCountry = layero.find('input[name="originCountry"]').val();
          const price = layero.find('input[name="price"]').val();
          const stock = layero.find('input[name="stock"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), flowerName,flowerType,originCountry,price,stock, }]);
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
