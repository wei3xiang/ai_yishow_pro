import React, { useState } from "react";
import data from "../data/ai_shop.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiShop) => {
    const modalContent = `${UpdateForm({ aiShop: aiShop })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiShop,
              aiShopName: layero.find('input[name="aiShopName"]').val(), 
              aiShopContact: layero.find('input[name="aiShopContact"]').val(), 
              aiShopAddress: layero.find('input[name="aiShopAddress"]').val(), 
              aiShopPhone: layero.find('input[name="aiShopPhone"]').val(), 
              aiShopEmail: layero.find('input[name="aiShopEmail"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiShop) => {
    const modalContent = `${DisableForm({ aiShop: aiShop })}`;
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

  const handleRemove = (aiShop) => {
    const modalContent = `${RemoveForm({ aiShop: aiShop })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiShop.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiShopName: "",  aiShopContact: "",  aiShopAddress: "",  aiShopPhone: "",  aiShopEmail: "", };
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
          const aiShopContact = layero.find('input[name="aiShopContact"]').val();
          const aiShopAddress = layero.find('input[name="aiShopAddress"]').val();
          const aiShopPhone = layero.find('input[name="aiShopPhone"]').val();
          const aiShopEmail = layero.find('input[name="aiShopEmail"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiShopName,aiShopContact,aiShopAddress,aiShopPhone,aiShopEmail, }]);
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