import React, { useState } from "react";
import data from "../data/ai_orders.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiOrders) => {
    const modalContent = `${UpdateForm({ aiOrders: aiOrders })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiOrders,
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiGoodsUuid: layero.find('input[name="aiGoodsUuid"]').val(), 
              aiOrderTime: layero.find('input[name="aiOrderTime"]').val(), 
              aiTotalPrice: layero.find('input[name="aiTotalPrice"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiOrders) => {
    const modalContent = `${DisableForm({ aiOrders: aiOrders })}`;
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

  const handleRemove = (aiOrders) => {
    const modalContent = `${RemoveForm({ aiOrders: aiOrders })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiOrders.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserUuid: "",  aiGoodsUuid: "",  aiOrderTime: "",  aiTotalPrice: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiGoodsUuid = layero.find('input[name="aiGoodsUuid"]').val();
          const aiOrderTime = layero.find('input[name="aiOrderTime"]').val();
          const aiTotalPrice = layero.find('input[name="aiTotalPrice"]').val();
           if (
           aiUserUuid &&

           aiGoodsUuid &&

           aiOrderTime &&

           aiTotalPrice
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserUuid,
          aiGoodsUuid,
          aiOrderTime,
          aiTotalPrice,
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
