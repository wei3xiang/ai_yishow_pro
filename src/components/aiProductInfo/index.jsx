import React, { useState } from "react";
import data from "../data/ai_product_info.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiProductInfo) => {
    const modalContent = `${UpdateForm({ aiProductInfo: aiProductInfo })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiProductInfo,
              aiCategory: layero.find('input[name="aiCategory"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiDesc: layero.find('input[name="aiDesc"]').val(), 
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

  const handleDetail = (aiProductInfo) => {
    const modalContent = `${DisableForm({ aiProductInfo: aiProductInfo })}`;
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

  const handleRemove = (aiProductInfo) => {
    const modalContent = `${RemoveForm({ aiProductInfo: aiProductInfo })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiProductInfo.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiCategory: "",  aiProductName: "",  aiDesc: "",  aiCreationTime: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiCategory = layero.find('input[name="aiCategory"]').val();
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiDesc = layero.find('input[name="aiDesc"]').val();
          const aiCreationTime = layero.find('input[name="aiCreationTime"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiCategory,aiProductName,aiDesc,aiCreationTime, }]);
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
