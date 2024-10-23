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
              aiPosition: layero.find('input[name="aiPosition"]').val(), 
              aiDepartment: layero.find('input[name="aiDepartment"]').val(), 
              aiHireDate: layero.find('input[name="aiHireDate"]').val(), 
              aiSalary: layero.find('input[name="aiSalary"]').val(), 
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
    const newItem = { uuid: "",  aiEmployeeName: "",  aiPosition: "",  aiDepartment: "",  aiHireDate: "",  aiSalary: "", };
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
          const aiPosition = layero.find('input[name="aiPosition"]').val();
          const aiDepartment = layero.find('input[name="aiDepartment"]').val();
          const aiHireDate = layero.find('input[name="aiHireDate"]').val();
          const aiSalary = layero.find('input[name="aiSalary"]').val();
           if (aiEmployeeName && aiPosition && aiDepartment && aiHireDate && aiSalary
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiEmployeeName,
            aiPosition,
            aiDepartment,
            aiHireDate,
            aiSalary,
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
