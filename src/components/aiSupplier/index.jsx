import React, { useState } from "react";
import data from "../data/ai_supplier.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiSupplier) => {
    const modalContent = `${UpdateForm({ aiSupplier: aiSupplier })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiSupplier,
              aiCompanyName: layero.find('input[name="aiCompanyName"]').val(), 
              aiContactName: layero.find('input[name="aiContactName"]').val(), 
              aiContactPhone: layero.find('input[name="aiContactPhone"]').val(), 
              aiContactEmail: layero.find('input[name="aiContactEmail"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiSupplier) => {
    const modalContent = `${DisableForm({ aiSupplier: aiSupplier })}`;
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

  const handleRemove = (aiSupplier) => {
    const modalContent = `${RemoveForm({ aiSupplier: aiSupplier })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiSupplier.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiCompanyName: "",  aiContactName: "",  aiContactPhone: "",  aiContactEmail: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiCompanyName = layero.find('input[name="aiCompanyName"]').val();
          const aiContactName = layero.find('input[name="aiContactName"]').val();
          const aiContactPhone = layero.find('input[name="aiContactPhone"]').val();
          const aiContactEmail = layero.find('input[name="aiContactEmail"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiCompanyName,aiContactName,aiContactPhone,aiContactEmail, }]);
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
