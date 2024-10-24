import React, { useState } from "react";
import data from "../data/ai_flower_shop.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiFlowerShop) => {
    const modalContent = `${UpdateForm({ aiFlowerShop: aiFlowerShop })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiFlowerShop,
              shopId: layero.find('input[name="shopId"]').val(), 
              shopName: layero.find('input[name="shopName"]').val(), 
              shopAddress: layero.find('input[name="shopAddress"]').val(), 
              shopPhone: layero.find('input[name="shopPhone"]').val(), 
              shopOpenTime: layero.find('input[name="shopOpenTime"]').val(), 
              shopCloseTime: layero.find('input[name="shopCloseTime"]').val(), 
              shopLatitude: layero.find('input[name="shopLatitude"]').val(), 
              shopLongitude: layero.find('input[name="shopLongitude"]').val(), 
              shopDescription: layero.find('input[name="shopDescription"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiFlowerShop) => {
    const modalContent = `${DisableForm({ aiFlowerShop: aiFlowerShop })}`;
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

  const handleRemove = (aiFlowerShop) => {
    const modalContent = `${RemoveForm({ aiFlowerShop: aiFlowerShop })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiFlowerShop.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  shopId: "",  shopName: "",  shopAddress: "",  shopPhone: "",  shopOpenTime: "",  shopCloseTime: "",  shopLatitude: "",  shopLongitude: "",  shopDescription: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const shopId = layero.find('input[name="shopId"]').val();
          const shopName = layero.find('input[name="shopName"]').val();
          const shopAddress = layero.find('input[name="shopAddress"]').val();
          const shopPhone = layero.find('input[name="shopPhone"]').val();
          const shopOpenTime = layero.find('input[name="shopOpenTime"]').val();
          const shopCloseTime = layero.find('input[name="shopCloseTime"]').val();
          const shopLatitude = layero.find('input[name="shopLatitude"]').val();
          const shopLongitude = layero.find('input[name="shopLongitude"]').val();
          const shopDescription = layero.find('input[name="shopDescription"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), shopId,shopName,shopAddress,shopPhone,shopOpenTime,shopCloseTime,shopLatitude,shopLongitude,shopDescription, }]);
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
