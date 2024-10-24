import React, { useState } from "react";
import data from "../data/ai_vendor.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiVendor) => {
    const modalContent = `${UpdateForm({ aiVendor: aiVendor })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiVendor,
              vendorName: layero.find('input[name="vendorName"]').val(), 
              vendorPhone: layero.find('input[name="vendorPhone"]').val(), 
              vendorEmail: layero.find('input[name="vendorEmail"]').val(), 
              vendorAddress: layero.find('input[name="vendorAddress"]').val(), 
              vendorWebsite: layero.find('input[name="vendorWebsite"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiVendor) => {
    const modalContent = `${DisableForm({ aiVendor: aiVendor })}`;
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

  const handleRemove = (aiVendor) => {
    const modalContent = `${RemoveForm({ aiVendor: aiVendor })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiVendor.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  vendorName: "",  vendorPhone: "",  vendorEmail: "",  vendorAddress: "",  vendorWebsite: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const vendorName = layero.find('input[name="vendorName"]').val();
          const vendorPhone = layero.find('input[name="vendorPhone"]').val();
          const vendorEmail = layero.find('input[name="vendorEmail"]').val();
          const vendorAddress = layero.find('input[name="vendorAddress"]').val();
          const vendorWebsite = layero.find('input[name="vendorWebsite"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), vendorName,vendorPhone,vendorEmail,vendorAddress,vendorWebsite, }]);
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
