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
              aiShopName: layero.find('input[name="aiShopName"]').val(), 
              aiContactPerson: layero.find('input[name="aiContactPerson"]').val(), 
              aiContactPhone: layero.find('input[name="aiContactPhone"]').val(), 
              aiShopAddress: layero.find('input[name="aiShopAddress"]').val(), 
              aiShopIntroduction: layero.find('input[name="aiShopIntroduction"]').val(), 
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
    const newItem = { uuid: "",  aiShopName: "",  aiContactPerson: "",  aiContactPhone: "",  aiShopAddress: "",  aiShopIntroduction: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiShopName = layero.find('input[name="aiShopName"]').val();
          const aiContactPerson = layero.find('input[name="aiContactPerson"]').val();
          const aiContactPhone = layero.find('input[name="aiContactPhone"]').val();
          const aiShopAddress = layero.find('input[name="aiShopAddress"]').val();
          const aiShopIntroduction = layero.find('input[name="aiShopIntroduction"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiShopName,aiContactPerson,aiContactPhone,aiShopAddress,aiShopIntroduction, }]);
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
