import React, { useState } from "react";
import data from "../data/ai_employee.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiEmployee) => {
    const modalContent = `${UpdateForm({ aiEmployee: aiEmployee })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiEmployee,
              aiEmployeeNumber: layero.find('input[name="aiEmployeeNumber"]').val(), 
              aiName: layero.find('input[name="aiName"]').val(), 
              aiTitle: layero.find('input[name="aiTitle"]').val(), 
              aiEmail: layero.find('input[name="aiEmail"]').val(), 
              aiPhone: layero.find('input[name="aiPhone"]').val(), 
              aiShopNumber: layero.find('input[name="aiShopNumber"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiEmployee) => {
    const modalContent = `${DisableForm({ aiEmployee: aiEmployee })}`;
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

  const handleRemove = (aiEmployee) => {
    const modalContent = `${RemoveForm({ aiEmployee: aiEmployee })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiEmployee.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiEmployeeNumber: "",  aiName: "",  aiTitle: "",  aiEmail: "",  aiPhone: "",  aiShopNumber: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiEmployeeNumber = layero.find('input[name="aiEmployeeNumber"]').val();
          const aiName = layero.find('input[name="aiName"]').val();
          const aiTitle = layero.find('input[name="aiTitle"]').val();
          const aiEmail = layero.find('input[name="aiEmail"]').val();
          const aiPhone = layero.find('input[name="aiPhone"]').val();
          const aiShopNumber = layero.find('input[name="aiShopNumber"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiEmployeeNumber,aiName,aiTitle,aiEmail,aiPhone,aiShopNumber, }]);
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
