import React, { useState } from "react";
import data from "../data/ai_user.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiUser) => {
    const modalContent = `${UpdateForm({ aiUser: aiUser })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiUser,
              ai_username: layero.find('input[name="ai_username"]').val(),
              ai_password: layero.find('input[name="ai_password"]').val(),
              ai_email: layero.find('input[name="ai_email"]').val(),
              ai_phone: layero.find('input[name="ai_phone"]').val(),
              ai_address: layero.find('input[name="ai_address"]').val(),
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiUser) => {
    const modalContent = `${DisableForm({ aiUser: aiUser })}`;
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

  const handleRemove = (aiUser) => {
    const modalContent = `${RemoveForm({ aiUser: aiUser })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiUser.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  ai_username: "",  ai_password: "",  ai_email: "",  ai_phone: "",  ai_address: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const ai_username = layero.find('input[name="ai_username"]').val();
          const ai_password = layero.find('input[name="ai_password"]').val();
          const ai_email = layero.find('input[name="ai_email"]').val();
          const ai_phone = layero.find('input[name="ai_phone"]').val();
          const ai_address = layero.find('input[name="ai_address"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), ai_username,ai_password,ai_email,ai_phone,ai_address, }]);
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
