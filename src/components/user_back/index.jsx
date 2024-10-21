import React, { useState } from "react";
import data from "../data/user.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const UserList = () => {
  const [users, setUsers] = useState(data);

  const handleEdit = (user) => {
    const modalContent = `${UpdateForm({ user: user })}`;
    layui.layer.open({
      type: 1,
      title: "编辑用户",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedUser = {
            ...user,
            username: layero.find('input[name="username"]').val(),
            email: layero.find('input[name="email"]').val(),
            role: layero.find('input[name="role"]').val(),
          };
          setUsers(
            users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (user) => {
    const modalContent = `${DisableForm({ user: user })}`;
    layui.layer.open({
      type: 1,
      title: "查看用户",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
      },
    });
  };

  const handleRemove = (user) => {
    const modalContent = `${RemoveForm({ user: user })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setUsers(users.filter((u) => u.id !== user.id));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newUser = { id: users.length + 1, username: "", email: "", role: "" };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增用户",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const username = layero.find('input[name="username"]').val();
          const email = layero.find('input[name="email"]').val();
          const role = layero.find('input[name="role"]').val();
          if (username && email && role) {
            setUsers([...users, { ...newUser, username, email, role }]);
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
        onClickCreate={() => handleCreate()}
        onClickRemove={(user) => handleRemove(user)}
        onClickDetail={(user) => handleDetail(user)}
        onClickUpdate={(user) => handleEdit(user)}
      />
    </div>
  );
};

export default UserList;
