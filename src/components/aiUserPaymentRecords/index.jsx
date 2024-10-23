import React, { useState } from "react";
import data from "../data/ai_user_payment_records.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiUserPaymentRecords) => {
    const modalContent = `${UpdateForm({ aiUserPaymentRecords: aiUserPaymentRecords })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiUserPaymentRecords,
              aiUserId: layero.find('input[name="aiUserId"]').val(), 
              aiTransactionId: layero.find('input[name="aiTransactionId"]').val(), 
              aiTransactionAmount: layero.find('input[name="aiTransactionAmount"]').val(), 
              aiTransactionDate: layero.find('input[name="aiTransactionDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiUserPaymentRecords) => {
    const modalContent = `${DisableForm({ aiUserPaymentRecords: aiUserPaymentRecords })}`;
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

  const handleRemove = (aiUserPaymentRecords) => {
    const modalContent = `${RemoveForm({ aiUserPaymentRecords: aiUserPaymentRecords })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiUserPaymentRecords.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserId: "",  aiTransactionId: "",  aiTransactionAmount: "",  aiTransactionDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUserId = layero.find('input[name="aiUserId"]').val();
          const aiTransactionId = layero.find('input[name="aiTransactionId"]').val();
          const aiTransactionAmount = layero.find('input[name="aiTransactionAmount"]').val();
          const aiTransactionDate = layero.find('input[name="aiTransactionDate"]').val();
           if (
           aiUserId &&

           aiTransactionId &&

           aiTransactionAmount &&

           aiTransactionDate
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserId,
          aiTransactionId,
          aiTransactionAmount,
          aiTransactionDate,
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
