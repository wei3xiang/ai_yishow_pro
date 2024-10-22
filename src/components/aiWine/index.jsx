import React, { useState } from "react";
import data from "../data/ai_wine.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiWine) => {
    const modalContent = `${UpdateForm({ aiWine: aiWine })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiWine,
              aiWineCode: layero.find('input[name="aiWineCode"]').val(), 
              aiCategoryUuid: layero.find('input[name="aiCategoryUuid"]').val(), 
              aiWineName: layero.find('input[name="aiWineName"]').val(), 
              aiDescription: layero.find('input[name="aiDescription"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiWine) => {
    const modalContent = `${DisableForm({ aiWine: aiWine })}`;
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

  const handleRemove = (aiWine) => {
    const modalContent = `${RemoveForm({ aiWine: aiWine })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiWine.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiWineCode: "",  aiCategoryUuid: "",  aiWineName: "",  aiDescription: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiWineCode = layero.find('input[name="aiWineCode"]').val();
          const aiCategoryUuid = layero.find('input[name="aiCategoryUuid"]').val();
          const aiWineName = layero.find('input[name="aiWineName"]').val();
          const aiDescription = layero.find('input[name="aiDescription"]').val();
           if (
           aiWineCode &&

           aiCategoryUuid &&

           aiWineName &&

           aiDescription
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiWineCode,
          aiCategoryUuid,
          aiWineName,
          aiDescription,
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
