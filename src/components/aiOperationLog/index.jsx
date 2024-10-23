import React, { useState } from "react";
import data from "../data/ai_operation_log.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOperationLog) => {
    const modalContent = `${UpdateForm({ aiOperationLog: aiOperationLog })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOperationLog,
              aiLogType: layero.find('input[name="aiLogType"]').val(), 
              aiLogDescription: layero.find('input[name="aiLogDescription"]').val(), 
              aiLogTime: layero.find('input[name="aiLogTime"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOperationLog) => {
    const modalContent = `${DisableForm({ aiOperationLog: aiOperationLog })}`;
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

  const handleRemove = (aiOperationLog) => {
    const modalContent = `${RemoveForm({ aiOperationLog: aiOperationLog })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOperationLog.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiLogType: "",  aiLogDescription: "",  aiLogTime: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiLogType = layero.find('input[name="aiLogType"]').val();
          const aiLogDescription = layero.find('input[name="aiLogDescription"]').val();
          const aiLogTime = layero.find('input[name="aiLogTime"]').val();
           if (
           aiLogType &&

           aiLogDescription &&

           aiLogTime
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiLogType,
          aiLogDescription,
          aiLogTime,
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
