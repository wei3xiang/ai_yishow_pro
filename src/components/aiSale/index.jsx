import React, { useState } from "react";
import data from "../data/ai_sale.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiSale) => {
    const modalContent = `${UpdateForm({ aiSale: aiSale })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiSale,
              aiSaleNumber: layero.find('input[name="aiSaleNumber"]').val(), 
              aiShopNumber: layero.find('input[name="aiShopNumber"]').val(), 
              aiSaleDate: layero.find('input[name="aiSaleDate"]').val(), 
              aiRevenue: layero.find('input[name="aiRevenue"]').val(), 
              aiCustomerName: layero.find('input[name="aiCustomerName"]').val(), 
              aiCustomerPhone: layero.find('input[name="aiCustomerPhone"]').val(), 
              aiProductNumber: layero.find('input[name="aiProductNumber"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiSale) => {
    const modalContent = `${DisableForm({ aiSale: aiSale })}`;
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

  const handleRemove = (aiSale) => {
    const modalContent = `${RemoveForm({ aiSale: aiSale })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiSale.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiSaleNumber: "",  aiShopNumber: "",  aiSaleDate: "",  aiRevenue: "",  aiCustomerName: "",  aiCustomerPhone: "",  aiProductNumber: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiSaleNumber = layero.find('input[name="aiSaleNumber"]').val();
          const aiShopNumber = layero.find('input[name="aiShopNumber"]').val();
          const aiSaleDate = layero.find('input[name="aiSaleDate"]').val();
          const aiRevenue = layero.find('input[name="aiRevenue"]').val();
          const aiCustomerName = layero.find('input[name="aiCustomerName"]').val();
          const aiCustomerPhone = layero.find('input[name="aiCustomerPhone"]').val();
          const aiProductNumber = layero.find('input[name="aiProductNumber"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiSaleNumber,aiShopNumber,aiSaleDate,aiRevenue,aiCustomerName,aiCustomerPhone,aiProductNumber, }]);
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
