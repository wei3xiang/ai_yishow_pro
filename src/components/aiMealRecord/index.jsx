import React, { useState } from "react";
import data from "../data/ai_meal_record.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiMealRecord) => {
    const modalContent = `${UpdateForm({ aiMealRecord: aiMealRecord })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiMealRecord,
              aiUserId: layero.find('input[name="aiUserId"]').val(), 
              aiOrderId: layero.find('input[name="aiOrderId"]').val(), 
              aiMealDate: layero.find('input[name="aiMealDate"]').val(), 
              aiMealTime: layero.find('input[name="aiMealTime"]').val(), 
              aiProductId: layero.find('input[name="aiProductId"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiMealRecord) => {
    const modalContent = `${DisableForm({ aiMealRecord: aiMealRecord })}`;
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

  const handleRemove = (aiMealRecord) => {
    const modalContent = `${RemoveForm({ aiMealRecord: aiMealRecord })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiMealRecord.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserId: "",  aiOrderId: "",  aiMealDate: "",  aiMealTime: "",  aiProductId: "",  aiQuantity: "", };
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
          const aiOrderId = layero.find('input[name="aiOrderId"]').val();
          const aiMealDate = layero.find('input[name="aiMealDate"]').val();
          const aiMealTime = layero.find('input[name="aiMealTime"]').val();
          const aiProductId = layero.find('input[name="aiProductId"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
           if (
           aiUserId &&

           aiOrderId &&

           aiMealDate &&

           aiMealTime &&

           aiProductId &&

           aiQuantity
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserId,
          aiOrderId,
          aiMealDate,
          aiMealTime,
          aiProductId,
          aiQuantity,
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
