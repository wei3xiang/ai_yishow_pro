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
              aiOrderId: layero.find('input[name="aiOrderId"]').val(), 
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiProductType: layero.find('input[name="aiProductType"]').val(), 
              aiUnit: layero.find('input[name="aiUnit"]').val(), 
              aiNumber: layero.find('input[name="aiNumber"]').val(), 
              aiOrderDate: layero.find('input[name="aiOrderDate"]').val(), 
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
    const newItem = { uuid: "",  aiOrderId: "",  aiUserUuid: "",  aiProductName: "",  aiProductType: "",  aiUnit: "",  aiNumber: "",  aiOrderDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiOrderId = layero.find('input[name="aiOrderId"]').val();
          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiProductType = layero.find('input[name="aiProductType"]').val();
          const aiUnit = layero.find('input[name="aiUnit"]').val();
          const aiNumber = layero.find('input[name="aiNumber"]').val();
          const aiOrderDate = layero.find('input[name="aiOrderDate"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiOrderId,aiUserUuid,aiProductName,aiProductType,aiUnit,aiNumber,aiOrderDate, }]);
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
