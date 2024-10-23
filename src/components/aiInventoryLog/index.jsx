import React, { useState } from "react";
import data from "../data/ai_inventory_log.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiInventoryLog) => {
    const modalContent = `${UpdateForm({ aiInventoryLog: aiInventoryLog })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiInventoryLog,
              aiInventoryUuid: layero.find('input[name="aiInventoryUuid"]').val(), 
              aiReason: layero.find('input[name="aiReason"]').val(), 
              aiChange: layero.find('input[name="aiChange"]').val(), 
              aiDate: layero.find('input[name="aiDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiInventoryLog) => {
    const modalContent = `${DisableForm({ aiInventoryLog: aiInventoryLog })}`;
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

  const handleRemove = (aiInventoryLog) => {
    const modalContent = `${RemoveForm({ aiInventoryLog: aiInventoryLog })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiInventoryLog.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiInventoryUuid: "",  aiReason: "",  aiChange: "",  aiDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiInventoryUuid = layero.find('input[name="aiInventoryUuid"]').val();
          const aiReason = layero.find('input[name="aiReason"]').val();
          const aiChange = layero.find('input[name="aiChange"]').val();
          const aiDate = layero.find('input[name="aiDate"]').val();
           if (
           aiInventoryUuid &&

           aiReason &&

           aiChange &&

           aiDate
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiInventoryUuid,
          aiReason,
          aiChange,
          aiDate,
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
