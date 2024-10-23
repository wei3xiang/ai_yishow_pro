import React, { useState } from "react";
import data from "../data/ai_payments.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiPayments) => {
    const modalContent = `${UpdateForm({ aiPayments: aiPayments })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
<<<<<<< HEAD:src/components/aiOrder/index.jsx
            ...aiOrder,
              customer: layero.find('input[name="customer"]').val(), 
              flower: layero.find('input[name="flower"]').val(), 
              quantity: layero.find('input[name="quantity"]').val(), 
=======
            ...aiPayments,
              aiOrderUuid: layero.find('input[name="aiOrderUuid"]').val(), 
              aiAmount: layero.find('input[name="aiAmount"]').val(), 
              aiPaymentDate: layero.find('input[name="aiPaymentDate"]').val(), 
              aiPaymentMethod: layero.find('input[name="aiPaymentMethod"]').val(), 
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/index.jsx
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiPayments) => {
    const modalContent = `${DisableForm({ aiPayments: aiPayments })}`;
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

  const handleRemove = (aiPayments) => {
    const modalContent = `${RemoveForm({ aiPayments: aiPayments })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiPayments.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
<<<<<<< HEAD:src/components/aiOrder/index.jsx
    const newItem = { uuid: "",  customer: "",  flower: "",  quantity: "", };
=======
    const newItem = { uuid: "",  aiOrderUuid: "",  aiAmount: "",  aiPaymentDate: "",  aiPaymentMethod: "", };
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/index.jsx
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

<<<<<<< HEAD:src/components/aiOrder/index.jsx
          const customer = layero.find('input[name="customer"]').val();
          const flower = layero.find('input[name="flower"]').val();
          const quantity = layero.find('input[name="quantity"]').val();
           if (customer && flower && quantity
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), customer,
            flower,
            quantity,
             }]);
=======
          const aiOrderUuid = layero.find('input[name="aiOrderUuid"]').val();
          const aiAmount = layero.find('input[name="aiAmount"]').val();
          const aiPaymentDate = layero.find('input[name="aiPaymentDate"]').val();
          const aiPaymentMethod = layero.find('input[name="aiPaymentMethod"]').val();
           if (
           aiOrderUuid &&

           aiAmount &&

           aiPaymentDate &&

           aiPaymentMethod
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiOrderUuid,
          aiAmount,
          aiPaymentDate,
          aiPaymentMethod,
           }]);
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/index.jsx
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
