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
              aiGender: layero.find('input[name="aiGender"]').val(), 
              aiDateOfBirth: layero.find('input[name="aiDateOfBirth"]').val(), 
              aiBalance: layero.find('input[name="aiBalance"]').val(), 
              aiRegIp: layero.find('input[name="aiRegIp"]').val(), 
              aiLastLoginIp: layero.find('input[name="aiLastLoginIp"]').val(), 
              aiLastLoginTime: layero.find('input[name="aiLastLoginTime"]').val(), 
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
    const newItem = { uuid: "",  aiUsername: "",  aiPassword: "",  aiEmail: "",  aiPhone: "",  aiAddress: "",  aiGender: "",  aiDateOfBirth: "",  aiBalance: "",  aiRegIp: "",  aiLastLoginIp: "",  aiLastLoginTime: "", };
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
          const aiGender = layero.find('input[name="aiGender"]').val();
          const aiDateOfBirth = layero.find('input[name="aiDateOfBirth"]').val();
          const aiBalance = layero.find('input[name="aiBalance"]').val();
          const aiRegIp = layero.find('input[name="aiRegIp"]').val();
          const aiLastLoginIp = layero.find('input[name="aiLastLoginIp"]').val();
          const aiLastLoginTime = layero.find('input[name="aiLastLoginTime"]').val();
           if (
           aiUsername &&

           aiPassword &&

           aiEmail &&

           aiPhone &&

           aiAddress &&

           aiGender &&

           aiDateOfBirth &&

           aiBalance &&

           aiRegIp &&

           aiLastLoginIp &&

           aiLastLoginTime
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUsername,
          aiPassword,
          aiEmail,
          aiPhone,
          aiAddress,
          aiGender,
          aiDateOfBirth,
          aiBalance,
          aiRegIp,
          aiLastLoginIp,
          aiLastLoginTime,
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
