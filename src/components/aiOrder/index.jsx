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
              orderId: layero.find('input[name="orderId"]').val(), 
              productId: layero.find('input[name="productId"]').val(), 
              userId: layero.find('input[name="userId"]').val(), 
              productName: layero.find('input[name="productName"]').val(), 
              orderTime: layero.find('input[name="orderTime"]').val(), 
              orderStatus: layero.find('input[name="orderStatus"]').val(), 
              totalPrice: layero.find('input[name="totalPrice"]').val(), 
              count: layero.find('input[name="count"]').val(), 
              userUuid: layero.find('input[name="userUuid"]').val(), 
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
    const newItem = { uuid: "",  orderId: "",  productId: "",  userId: "",  productName: "",  orderTime: "",  orderStatus: "",  totalPrice: "",  count: "",  userUuid: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const orderId = layero.find('input[name="orderId"]').val();
          const productId = layero.find('input[name="productId"]').val();
          const userId = layero.find('input[name="userId"]').val();
          const productName = layero.find('input[name="productName"]').val();
          const orderTime = layero.find('input[name="orderTime"]').val();
          const orderStatus = layero.find('input[name="orderStatus"]').val();
          const totalPrice = layero.find('input[name="totalPrice"]').val();
          const count = layero.find('input[name="count"]').val();
          const userUuid = layero.find('input[name="userUuid"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), orderId,productId,userId,productName,orderTime,orderStatus,totalPrice,count,userUuid, }]);
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
