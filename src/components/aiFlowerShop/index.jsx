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
              shop_name: layero.find('input[name="shop_name"]').val(),
              shop_location: layero.find('input[name="shop_location"]').val(),
              contact_name: layero.find('input[name="contact_name"]').val(),
              contact_phone: layero.find('input[name="contact_phone"]').val(),
              opening_hours: layero.find('input[name="opening_hours"]').val(),
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
    const newItem = { uuid: "",  shop_name: "",  shop_location: "",  contact_name: "",  contact_phone: "",  opening_hours: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const shop_name = layero.find('input[name="shop_name"]').val();
          const shop_location = layero.find('input[name="shop_location"]').val();
          const contact_name = layero.find('input[name="contact_name"]').val();
          const contact_phone = layero.find('input[name="contact_phone"]').val();
          const opening_hours = layero.find('input[name="opening_hours"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), shop_name,shop_location,contact_name,contact_phone,opening_hours, }]);
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
