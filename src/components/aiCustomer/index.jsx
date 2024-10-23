import React, { useState } from "react";
import data from "../data/ai_customer.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiCustomer) => {
    const modalContent = `${UpdateForm({ aiCustomer: aiCustomer })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiCustomer,
              customerName: layero.find('input[name="customerName"]').val(), 
              customerEmail: layero.find('input[name="customerEmail"]').val(), 
              customerPhone: layero.find('input[name="customerPhone"]').val(), 
              customerAddress: layero.find('input[name="customerAddress"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiCustomer) => {
    const modalContent = `${DisableForm({ aiCustomer: aiCustomer })}`;
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

  const handleRemove = (aiCustomer) => {
    const modalContent = `${RemoveForm({ aiCustomer: aiCustomer })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiCustomer.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  customerName: "",  customerEmail: "",  customerPhone: "",  customerAddress: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const customerName = layero.find('input[name="customerName"]').val();
          const customerEmail = layero.find('input[name="customerEmail"]').val();
          const customerPhone = layero.find('input[name="customerPhone"]').val();
          const customerAddress = layero.find('input[name="customerAddress"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), customerName,customerEmail,customerPhone,customerAddress, }]);
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
