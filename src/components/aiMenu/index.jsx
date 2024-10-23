import React, { useState } from "react";
import data from "../data/ai_menu.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiMenu) => {
    const modalContent = `${UpdateForm({ aiMenu: aiMenu })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiMenu,
              aiProductId: layero.find('input[name="aiProductId"]').val(), 
              aiCategoryId: layero.find('input[name="aiCategoryId"]').val(), 
              aiCategoryName: layero.find('input[name="aiCategoryName"]').val(), 
              aiItemName: layero.find('input[name="aiItemName"]').val(), 
              aiPrice: layero.find('input[name="aiPrice"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiMenu) => {
    const modalContent = `${DisableForm({ aiMenu: aiMenu })}`;
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

  const handleRemove = (aiMenu) => {
    const modalContent = `${RemoveForm({ aiMenu: aiMenu })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiMenu.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiProductId: "",  aiCategoryId: "",  aiCategoryName: "",  aiItemName: "",  aiPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiProductId = layero.find('input[name="aiProductId"]').val();
          const aiCategoryId = layero.find('input[name="aiCategoryId"]').val();
          const aiCategoryName = layero.find('input[name="aiCategoryName"]').val();
          const aiItemName = layero.find('input[name="aiItemName"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiProductId,aiCategoryId,aiCategoryName,aiItemName,aiPrice, }]);
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
