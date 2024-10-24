import React, { useState } from "react";
import data from "../data/ai_promotion.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiPromotion) => {
    const modalContent = `${UpdateForm({ aiPromotion: aiPromotion })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiPromotion,
              aiPromotionName: layero.find('input[name="aiPromotionName"]').val(), 
              aiStartDate: layero.find('input[name="aiStartDate"]').val(), 
              aiEndDate: layero.find('input[name="aiEndDate"]').val(), 
              aiDiscount: layero.find('input[name="aiDiscount"]').val(), 
              aiValidity: layero.find('input[name="aiValidity"]').val(), 
              aiCreationTime: layero.find('input[name="aiCreationTime"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiPromotion) => {
    const modalContent = `${DisableForm({ aiPromotion: aiPromotion })}`;
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

  const handleRemove = (aiPromotion) => {
    const modalContent = `${RemoveForm({ aiPromotion: aiPromotion })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiPromotion.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiPromotionName: "",  aiStartDate: "",  aiEndDate: "",  aiDiscount: "",  aiValidity: "",  aiCreationTime: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiPromotionName = layero.find('input[name="aiPromotionName"]').val();
          const aiStartDate = layero.find('input[name="aiStartDate"]').val();
          const aiEndDate = layero.find('input[name="aiEndDate"]').val();
          const aiDiscount = layero.find('input[name="aiDiscount"]').val();
          const aiValidity = layero.find('input[name="aiValidity"]').val();
          const aiCreationTime = layero.find('input[name="aiCreationTime"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiPromotionName,aiStartDate,aiEndDate,aiDiscount,aiValidity,aiCreationTime, }]);
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
