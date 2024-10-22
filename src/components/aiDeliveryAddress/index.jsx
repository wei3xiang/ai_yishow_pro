import React, { useState } from "react";
import data from "../data/ai_delivery_address.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiDeliveryAddress) => {
    const modalContent = `${UpdateForm({ aiDeliveryAddress: aiDeliveryAddress })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiDeliveryAddress,
              aiCustomerUuid: layero.find('input[name="aiCustomerUuid"]').val(), 
              aiAddressType: layero.find('input[name="aiAddressType"]').val(), 
              aiName: layero.find('input[name="aiName"]').val(), 
              aiPhone: layero.find('input[name="aiPhone"]').val(), 
              aiAddress: layero.find('input[name="aiAddress"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiDeliveryAddress) => {
    const modalContent = `${DisableForm({ aiDeliveryAddress: aiDeliveryAddress })}`;
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

  const handleRemove = (aiDeliveryAddress) => {
    const modalContent = `${RemoveForm({ aiDeliveryAddress: aiDeliveryAddress })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiDeliveryAddress.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiCustomerUuid: "",  aiAddressType: "",  aiName: "",  aiPhone: "",  aiAddress: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiCustomerUuid = layero.find('input[name="aiCustomerUuid"]').val();
          const aiAddressType = layero.find('input[name="aiAddressType"]').val();
          const aiName = layero.find('input[name="aiName"]').val();
          const aiPhone = layero.find('input[name="aiPhone"]').val();
          const aiAddress = layero.find('input[name="aiAddress"]').val();
           if (
           aiCustomerUuid &&

           aiAddressType &&

           aiName &&

           aiPhone &&

           aiAddress
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiCustomerUuid,
          aiAddressType,
          aiName,
          aiPhone,
          aiAddress,
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
