import React, { useState } from "react";
import data from "../data/ai_brewing_log.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiBrewingLog) => {
    const modalContent = `${UpdateForm({ aiBrewingLog: aiBrewingLog })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiBrewingLog,
              aiBrewingDate: layero.find('input[name="aiBrewingDate"]').val(), 
              aiBrewedItemId: layero.find('input[name="aiBrewedItemId"]').val(), 
              aiNotes: layero.find('input[name="aiNotes"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiBrewingLog) => {
    const modalContent = `${DisableForm({ aiBrewingLog: aiBrewingLog })}`;
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

  const handleRemove = (aiBrewingLog) => {
    const modalContent = `${RemoveForm({ aiBrewingLog: aiBrewingLog })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiBrewingLog.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiBrewingDate: "",  aiBrewedItemId: "",  aiNotes: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiBrewingDate = layero.find('input[name="aiBrewingDate"]').val();
          const aiBrewedItemId = layero.find('input[name="aiBrewedItemId"]').val();
          const aiNotes = layero.find('input[name="aiNotes"]').val();
           if (
           aiBrewingDate &&

           aiBrewedItemId &&

           
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiBrewingDate,
          aiBrewedItemId,
          aiNotes,
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
