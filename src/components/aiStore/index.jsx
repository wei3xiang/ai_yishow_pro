import React, { useState } from "react";
import data from "../data/ai_store.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiStore) => {
    const modalContent = `${UpdateForm({ aiStore: aiStore })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiStore,
              storeId: layero.find('input[name="storeId"]').val(), 
              storeName: layero.find('input[name="storeName"]').val(), 
              storeAddress: layero.find('input[name="storeAddress"]').val(), 
              storeEmail: layero.find('input[name="storeEmail"]').val(), 
              storePhone: layero.find('input[name="storePhone"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiStore) => {
    const modalContent = `${DisableForm({ aiStore: aiStore })}`;
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

  const handleRemove = (aiStore) => {
    const modalContent = `${RemoveForm({ aiStore: aiStore })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiStore.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  storeId: "",  storeName: "",  storeAddress: "",  storeEmail: "",  storePhone: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const storeId = layero.find('input[name="storeId"]').val();
          const storeName = layero.find('input[name="storeName"]').val();
          const storeAddress = layero.find('input[name="storeAddress"]').val();
          const storeEmail = layero.find('input[name="storeEmail"]').val();
          const storePhone = layero.find('input[name="storePhone"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), storeId,storeName,storeAddress,storeEmail,storePhone, }]);
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
