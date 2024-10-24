import React, { useState } from "react";
import data from "../data/ai_order.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrder) => {
    const modalContent = `${UpdateForm({ aiOrder: aiOrder })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrder,
              customerUuid: layero.find('input[name="customerUuid"]').val(), 
              shopUuid: layero.find('input[name="shopUuid"]').val(), 
              totalCost: layero.find('input[name="totalCost"]').val(), 
              orderDate: layero.find('input[name="orderDate"]').val(), 
              deliveryDate: layero.find('input[name="deliveryDate"]').val(), 
              orderStatus: layero.find('input[name="orderStatus"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrder) => {
    const modalContent = `${DisableForm({ aiOrder: aiOrder })}`;
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

  const handleRemove = (aiOrder) => {
    const modalContent = `${RemoveForm({ aiOrder: aiOrder })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrder.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  customerUuid: "",  shopUuid: "",  totalCost: "",  orderDate: "",  deliveryDate: "",  orderStatus: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const customerUuid = layero.find('input[name="customerUuid"]').val();
          const shopUuid = layero.find('input[name="shopUuid"]').val();
          const totalCost = layero.find('input[name="totalCost"]').val();
          const orderDate = layero.find('input[name="orderDate"]').val();
          const deliveryDate = layero.find('input[name="deliveryDate"]').val();
          const orderStatus = layero.find('input[name="orderStatus"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), customerUuid,shopUuid,totalCost,orderDate,deliveryDate,orderStatus, }]);
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
