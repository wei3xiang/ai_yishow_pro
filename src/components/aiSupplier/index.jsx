import React, { useState } from "react";
import data from "../data/ai_supplier.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiSupplier) => {
    const modalContent = `${UpdateForm({ aiSupplier: aiSupplier })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiSupplier,
              aiSuppName: layero.find('input[name="aiSuppName"]').val(), 
              aiSuppEmail: layero.find('input[name="aiSuppEmail"]').val(), 
              aiSuppPhone: layero.find('input[name="aiSuppPhone"]').val(), 
              aiSuppAddress: layero.find('input[name="aiSuppAddress"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiSupplier) => {
    const modalContent = `${DisableForm({ aiSupplier: aiSupplier })}`;
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

  const handleRemove = (aiSupplier) => {
    const modalContent = `${RemoveForm({ aiSupplier: aiSupplier })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiSupplier.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiSuppName: "",  aiSuppEmail: "",  aiSuppPhone: "",  aiSuppAddress: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiSuppName = layero.find('input[name="aiSuppName"]').val();
          const aiSuppEmail = layero.find('input[name="aiSuppEmail"]').val();
          const aiSuppPhone = layero.find('input[name="aiSuppPhone"]').val();
          const aiSuppAddress = layero.find('input[name="aiSuppAddress"]').val();
           if (
           aiSuppName &&

           aiSuppEmail &&

           aiSuppPhone &&

           aiSuppAddress
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiSuppName,
          aiSuppEmail,
          aiSuppPhone,
          aiSuppAddress,
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
