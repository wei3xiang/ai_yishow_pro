import React, { useState } from "react";
import data from "../data/ai_feedback.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiFeedback) => {
    const modalContent = `${UpdateForm({ aiFeedback: aiFeedback })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiFeedback,
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiFeedbackContent: layero.find('input[name="aiFeedbackContent"]').val(), 
              aiScore: layero.find('input[name="aiScore"]').val(), 
              aiFeedbackStatus: layero.find('input[name="aiFeedbackStatus"]').val(), 
              aiCreationTime: layero.find('input[name="aiCreationTime"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiFeedback) => {
    const modalContent = `${DisableForm({ aiFeedback: aiFeedback })}`;
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

  const handleRemove = (aiFeedback) => {
    const modalContent = `${RemoveForm({ aiFeedback: aiFeedback })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiFeedback.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserUuid: "",  aiFeedbackContent: "",  aiScore: "",  aiFeedbackStatus: "",  aiCreationTime: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiFeedbackContent = layero.find('input[name="aiFeedbackContent"]').val();
          const aiScore = layero.find('input[name="aiScore"]').val();
          const aiFeedbackStatus = layero.find('input[name="aiFeedbackStatus"]').val();
          const aiCreationTime = layero.find('input[name="aiCreationTime"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiUserUuid,aiFeedbackContent,aiScore,aiFeedbackStatus,aiCreationTime, }]);
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
