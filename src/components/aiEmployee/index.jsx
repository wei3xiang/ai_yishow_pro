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
              aiEmployeeName: layero.find('input[name="aiEmployeeName"]').val(), 
              aiEmployeeGender: layero.find('input[name="aiEmployeeGender"]').val(), 
              aiEmployeeAge: layero.find('input[name="aiEmployeeAge"]').val(), 
              aiEmployeePosition: layero.find('input[name="aiEmployeePosition"]').val(), 
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
    const newItem = { uuid: "",  aiEmployeeName: "",  aiEmployeeGender: "",  aiEmployeeAge: "",  aiEmployeePosition: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiEmployeeName = layero.find('input[name="aiEmployeeName"]').val();
          const aiEmployeeGender = layero.find('input[name="aiEmployeeGender"]').val();
          const aiEmployeeAge = layero.find('input[name="aiEmployeeAge"]').val();
          const aiEmployeePosition = layero.find('input[name="aiEmployeePosition"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiEmployeeName,aiEmployeeGender,aiEmployeeAge,aiEmployeePosition, }]);
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
