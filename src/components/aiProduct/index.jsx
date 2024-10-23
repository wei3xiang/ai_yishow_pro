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
              aiCategoryUuid: layero.find('input[name="aiCategoryUuid"]').val(), 
              aiStoreUuid: layero.find('input[name="aiStoreUuid"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiProductPrice: layero.find('input[name="aiProductPrice"]').val(), 
              aiProductStock: layero.find('input[name="aiProductStock"]').val(), 
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
    const newItem = { uuid: "",  aiCategoryUuid: "",  aiStoreUuid: "",  aiProductName: "",  aiProductPrice: "",  aiProductStock: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiCategoryUuid = layero.find('input[name="aiCategoryUuid"]').val();
          const aiStoreUuid = layero.find('input[name="aiStoreUuid"]').val();
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiProductPrice = layero.find('input[name="aiProductPrice"]').val();
          const aiProductStock = layero.find('input[name="aiProductStock"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiCategoryUuid,aiStoreUuid,aiProductName,aiProductPrice,aiProductStock, }]);
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
