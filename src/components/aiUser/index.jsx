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
              aiUsername: layero.find('input[name="aiUsername"]').val(), 
              aiPassword: layero.find('input[name="aiPassword"]').val(), 
              aiEmail: layero.find('input[name="aiEmail"]').val(), 
              aiPhone: layero.find('input[name="aiPhone"]').val(), 
              aiAddress: layero.find('input[name="aiAddress"]').val(), 
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
    const newItem = { uuid: "",  aiUsername: "",  aiPassword: "",  aiEmail: "",  aiPhone: "",  aiAddress: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUsername = layero.find('input[name="aiUsername"]').val();
          const aiPassword = layero.find('input[name="aiPassword"]').val();
          const aiEmail = layero.find('input[name="aiEmail"]').val();
          const aiPhone = layero.find('input[name="aiPhone"]').val();
          const aiAddress = layero.find('input[name="aiAddress"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiUsername,aiPassword,aiEmail,aiPhone,aiAddress, }]);
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
