import React, { useState } from "react";
import data from "../data/ai_customer.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiCustomer) => {
    const modalContent = `${UpdateForm({ aiCustomer: aiCustomer })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiCustomer,
              aiName: layero.find('input[name="aiName"]').val(), 
              aiContact: layero.find('input[name="aiContact"]').val(), 
              aiAddress: layero.find('input[name="aiAddress"]').val(), 
              aiEmail: layero.find('input[name="aiEmail"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiCustomer) => {
    const modalContent = `${DisableForm({ aiCustomer: aiCustomer })}`;
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

  const handleRemove = (aiCustomer) => {
    const modalContent = `${RemoveForm({ aiCustomer: aiCustomer })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiCustomer.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiName: "",  aiContact: "",  aiAddress: "",  aiEmail: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiName = layero.find('input[name="aiName"]').val();
          const aiContact = layero.find('input[name="aiContact"]').val();
          const aiAddress = layero.find('input[name="aiAddress"]').val();
          const aiEmail = layero.find('input[name="aiEmail"]').val();
           if (
           aiName &&

           aiContact &&

           aiAddress &&

           aiEmail
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiName,
          aiContact,
          aiAddress,
          aiEmail,
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
