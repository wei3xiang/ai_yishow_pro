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
              productName: layero.find('input[name="productName"]').val(), 
              productPrice: layero.find('input[name="productPrice"]').val(), 
              productDescription: layero.find('input[name="productDescription"]').val(), 
              productStock: layero.find('input[name="productStock"]').val(), 
              storeId: layero.find('input[name="storeId"]').val(), 
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
    const newItem = { uuid: "",  productName: "",  productPrice: "",  productDescription: "",  productStock: "",  storeId: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const productName = layero.find('input[name="productName"]').val();
          const productPrice = layero.find('input[name="productPrice"]').val();
          const productDescription = layero.find('input[name="productDescription"]').val();
          const productStock = layero.find('input[name="productStock"]').val();
          const storeId = layero.find('input[name="storeId"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), productName,productPrice,productDescription,productStock,storeId, }]);
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
