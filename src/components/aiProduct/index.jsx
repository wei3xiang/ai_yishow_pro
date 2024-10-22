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
              aiProductId: layero.find('input[name="aiProductId"]').val(), 
              aiProductName: layero.find('input[name="aiProductName"]').val(), 
              aiPrice: layero.find('input[name="aiPrice"]').val(), 
              aiStock: layero.find('input[name="aiStock"]').val(), 
              aiSupplier: layero.find('input[name="aiSupplier"]').val(), 
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
    const newItem = { uuid: "",  aiProductId: "",  aiProductName: "",  aiPrice: "",  aiStock: "",  aiSupplier: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiProductId = layero.find('input[name="aiProductId"]').val();
          const aiProductName = layero.find('input[name="aiProductName"]').val();
          const aiPrice = layero.find('input[name="aiPrice"]').val();
          const aiStock = layero.find('input[name="aiStock"]').val();
          const aiSupplier = layero.find('input[name="aiSupplier"]').val();
           if (
           aiProductId &&

           aiProductName &&

           aiPrice &&

           aiStock &&

           aiSupplier
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiProductId,
          aiProductName,
          aiPrice,
          aiStock,
          aiSupplier,
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
