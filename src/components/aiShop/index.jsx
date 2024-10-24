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
              shopName: layero.find('input[name="shopName"]').val(), 
              shopAddress: layero.find('input[name="shopAddress"]').val(), 
              shopPhone: layero.find('input[name="shopPhone"]').val(), 
              shopEmail: layero.find('input[name="shopEmail"]').val(), 
              shopWebsite: layero.find('input[name="shopWebsite"]').val(), 
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
    const newItem = { uuid: "",  shopName: "",  shopAddress: "",  shopPhone: "",  shopEmail: "",  shopWebsite: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const shopName = layero.find('input[name="shopName"]').val();
          const shopAddress = layero.find('input[name="shopAddress"]').val();
          const shopPhone = layero.find('input[name="shopPhone"]').val();
          const shopEmail = layero.find('input[name="shopEmail"]').val();
          const shopWebsite = layero.find('input[name="shopWebsite"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), shopName,shopAddress,shopPhone,shopEmail,shopWebsite, }]);
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
