import React, { useState } from "react";
import data from "../data/ai_branch_product.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiBranchProduct) => {
    const modalContent = `${UpdateForm({ aiBranchProduct: aiBranchProduct })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiBranchProduct,
              ai_branch_uuid: layero.find('input[name="ai_branch_uuid"]').val(),
              ai_product_uuid: layero.find('input[name="ai_product_uuid"]').val(),
              ai_quantity: layero.find('input[name="ai_quantity"]').val(),
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiBranchProduct) => {
    const modalContent = `${DisableForm({ aiBranchProduct: aiBranchProduct })}`;
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

  const handleRemove = (aiBranchProduct) => {
    const modalContent = `${RemoveForm({ aiBranchProduct: aiBranchProduct })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiBranchProduct.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  ai_branch_uuid: "",  ai_product_uuid: "",  ai_quantity: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const ai_branch_uuid = layero.find('input[name="ai_branch_uuid"]').val();
          const ai_product_uuid = layero.find('input[name="ai_product_uuid"]').val();
          const ai_quantity = layero.find('input[name="ai_quantity"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), ai_branch_uuid,ai_product_uuid,ai_quantity, }]);
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
