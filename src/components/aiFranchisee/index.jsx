import React, { useState } from "react";
import data from "../data/ai_franchisee.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiFranchisee) => {
    const modalContent = `${UpdateForm({ aiFranchisee: aiFranchisee })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiFranchisee,
              aiFranchiseeName: layero.find('input[name="aiFranchiseeName"]').val(), 
              aiFranchiseeContact: layero.find('input[name="aiFranchiseeContact"]').val(), 
              aiFranchiseePhone: layero.find('input[name="aiFranchiseePhone"]').val(), 
              aiFranchiseeAddress: layero.find('input[name="aiFranchiseeAddress"]').val(), 
              aiFranchiseeStatus: layero.find('input[name="aiFranchiseeStatus"]').val(), 
              aiFranchiseeStartDate: layero.find('input[name="aiFranchiseeStartDate"]').val(), 
              aiFranchiseeEndDate: layero.find('input[name="aiFranchiseeEndDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiFranchisee) => {
    const modalContent = `${DisableForm({ aiFranchisee: aiFranchisee })}`;
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

  const handleRemove = (aiFranchisee) => {
    const modalContent = `${RemoveForm({ aiFranchisee: aiFranchisee })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiFranchisee.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiFranchiseeName: "",  aiFranchiseeContact: "",  aiFranchiseePhone: "",  aiFranchiseeAddress: "",  aiFranchiseeStatus: "",  aiFranchiseeStartDate: "",  aiFranchiseeEndDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiFranchiseeName = layero.find('input[name="aiFranchiseeName"]').val();
          const aiFranchiseeContact = layero.find('input[name="aiFranchiseeContact"]').val();
          const aiFranchiseePhone = layero.find('input[name="aiFranchiseePhone"]').val();
          const aiFranchiseeAddress = layero.find('input[name="aiFranchiseeAddress"]').val();
          const aiFranchiseeStatus = layero.find('input[name="aiFranchiseeStatus"]').val();
          const aiFranchiseeStartDate = layero.find('input[name="aiFranchiseeStartDate"]').val();
          const aiFranchiseeEndDate = layero.find('input[name="aiFranchiseeEndDate"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiFranchiseeName,aiFranchiseeContact,aiFranchiseePhone,aiFranchiseeAddress,aiFranchiseeStatus,aiFranchiseeStartDate,aiFranchiseeEndDate, }]);
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
