import React, { useState } from "react";
import data from "../data/ai_order_detail.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrderDetail) => {
    const modalContent = `${UpdateForm({ aiOrderDetail: aiOrderDetail })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrderDetail,
              aiOrderUuid: layero.find('input[name="aiOrderUuid"]').val(), 
              aiFlowerUuid: layero.find('input[name="aiFlowerUuid"]').val(), 
              aiFlowerCount: layero.find('input[name="aiFlowerCount"]').val(), 
              aiFlowerTotalPrice: layero.find('input[name="aiFlowerTotalPrice"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrderDetail) => {
    const modalContent = `${DisableForm({ aiOrderDetail: aiOrderDetail })}`;
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

  const handleRemove = (aiOrderDetail) => {
    const modalContent = `${RemoveForm({ aiOrderDetail: aiOrderDetail })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrderDetail.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiOrderUuid: "",  aiFlowerUuid: "",  aiFlowerCount: "",  aiFlowerTotalPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiOrderUuid = layero.find('input[name="aiOrderUuid"]').val();
          const aiFlowerUuid = layero.find('input[name="aiFlowerUuid"]').val();
          const aiFlowerCount = layero.find('input[name="aiFlowerCount"]').val();
          const aiFlowerTotalPrice = layero.find('input[name="aiFlowerTotalPrice"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiOrderUuid,aiFlowerUuid,aiFlowerCount,aiFlowerTotalPrice, }]);
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
