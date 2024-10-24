import React, { useState } from "react";
import data from "../data/ai_branch.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiBranch) => {
    const modalContent = `${UpdateForm({ aiBranch: aiBranch })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiBranch,
              ai_branch_name: layero.find('input[name="ai_branch_name"]').val(),
              ai_address: layero.find('input[name="ai_address"]').val(),
              ai_contact_person: layero.find('input[name="ai_contact_person"]').val(),
              ai_contact_phone: layero.find('input[name="ai_contact_phone"]').val(),
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiBranch) => {
    const modalContent = `${DisableForm({ aiBranch: aiBranch })}`;
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

  const handleRemove = (aiBranch) => {
    const modalContent = `${RemoveForm({ aiBranch: aiBranch })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiBranch.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  ai_branch_name: "",  ai_address: "",  ai_contact_person: "",  ai_contact_phone: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const ai_branch_name = layero.find('input[name="ai_branch_name"]').val();
          const ai_address = layero.find('input[name="ai_address"]').val();
          const ai_contact_person = layero.find('input[name="ai_contact_person"]').val();
          const ai_contact_phone = layero.find('input[name="ai_contact_phone"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), ai_branch_name,ai_address,ai_contact_person,ai_contact_phone, }]);
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
