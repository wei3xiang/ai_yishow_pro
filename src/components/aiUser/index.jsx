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
              aiFirstname: layero.find('input[name="aiFirstname"]').val(), 
              aiLastname: layero.find('input[name="aiLastname"]').val(), 
              aiEmail: layero.find('input[name="aiEmail"]').val(), 
              aiPhone: layero.find('input[name="aiPhone"]').val(), 
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
    const newItem = { uuid: "",  aiFirstname: "",  aiLastname: "",  aiEmail: "",  aiPhone: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiFirstname = layero.find('input[name="aiFirstname"]').val();
          const aiLastname = layero.find('input[name="aiLastname"]').val();
          const aiEmail = layero.find('input[name="aiEmail"]').val();
          const aiPhone = layero.find('input[name="aiPhone"]').val();
           if (
           aiFirstname &&

           aiLastname &&

           aiEmail &&

           aiPhone
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiFirstname,
          aiLastname,
          aiEmail,
          aiPhone,
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
