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
              name: layero.find('input[name="name"]').val(), 
              address: layero.find('input[name="address"]').val(), 
              phone: layero.find('input[name="phone"]').val(), 
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
    const newItem = { uuid: "",  name: "",  address: "",  phone: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const name = layero.find('input[name="name"]').val();
          const address = layero.find('input[name="address"]').val();
          const phone = layero.find('input[name="phone"]').val();
           if (name && address && phone
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), name,
            address,
            phone,
             }]);
            layui.layer.close(index);
          } else {
            layui.layer.msg("请填写完整信息", { icon: 5 });
          }
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
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
