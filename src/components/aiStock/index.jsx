import React, { useState } from "react";
import data from "../data/ai_stock.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiStock) => {
    const modalContent = `${UpdateForm({ aiStock: aiStock })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiStock,
              aiBreweryName: layero.find('input[name="aiBreweryName"]').val(), 
              aiBeerName: layero.find('input[name="aiBeerName"]').val(), 
              aiQuantity: layero.find('input[name="aiQuantity"]').val(), 
              aiStockDate: layero.find('input[name="aiStockDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiStock) => {
    const modalContent = `${DisableForm({ aiStock: aiStock })}`;
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

  const handleRemove = (aiStock) => {
    const modalContent = `${RemoveForm({ aiStock: aiStock })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiStock.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiBreweryName: "",  aiBeerName: "",  aiQuantity: "",  aiStockDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiBreweryName = layero.find('input[name="aiBreweryName"]').val();
          const aiBeerName = layero.find('input[name="aiBeerName"]').val();
          const aiQuantity = layero.find('input[name="aiQuantity"]').val();
          const aiStockDate = layero.find('input[name="aiStockDate"]').val();
           if (
           aiBreweryName &&

           aiBeerName &&

           aiQuantity &&

           aiStockDate
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiBreweryName,
          aiBeerName,
          aiQuantity,
          aiStockDate,
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
