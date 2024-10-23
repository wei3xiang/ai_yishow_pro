import React, { useState } from "react";
import data from "../data/ai_product.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiProduct) => {
    const modalContent = `${UpdateForm({ aiProduct: aiProduct })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiProduct,
              aiProductNumber: layero.find('input[name="aiProductNumber"]').val(), 
              aiName: layero.find('input[name="aiName"]').val(), 
              aiDescription: layero.find('input[name="aiDescription"]').val(), 
              aiPrice: layero.find('input[name="aiPrice"]').val(), 
              aiStock: layero.find('input[name="aiStock"]').val(), 
              aiCategory: layero.find('input[name="aiCategory"]').val(), 
              aiImageUrl: layero.find('input[name="aiImageUrl"]').val(), 
              aiShopNumber: layero.find('input[name="aiShopNumber"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiProduct) => {
    const modalContent = `${DisableForm({ aiProduct: aiProduct })}`;
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

  const handleRemove = (aiProduct) => {
    const modalContent = `${RemoveForm({ aiProduct: aiProduct })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiProduct.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiProductNumber: "",  aiName: "",  aiDescription: "",  aiPrice: "",  aiStock: "",  aiCategory: "",  aiImageUrl: "",  aiShopNumber: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiProductNumber = layero.find('input[name="aiProductNumber"]').val();
          const aiName = layero.find('input[name="aiName"]').val();
          const aiDescription = layero.find('input[name="aiDescription"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
          const aiStock = layero.find('input[name="aiStock"]').val();
          const aiCategory = layero.find('input[name="aiCategory"]').val();
          const aiImageUrl = layero.find('input[name="aiImageUrl"]').val();
          const aiShopNumber = layero.find('input[name="aiShopNumber"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiProductNumber,aiName,aiDescription,aiPrice,aiStock,aiCategory,aiImageUrl,aiShopNumber, }]);
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
