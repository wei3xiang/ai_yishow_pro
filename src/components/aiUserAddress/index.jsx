import React, { useState } from "react";
import data from "../data/ai_user_address.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiUserAddress) => {
    const modalContent = `${UpdateForm({ aiUserAddress: aiUserAddress })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiUserAddress,
              aiUserId: layero.find('input[name="aiUserId"]').val(), 
              aiAddress: layero.find('input[name="aiAddress"]').val(), 
              aiIsDefault: layero.find('input[name="aiIsDefault"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiUserAddress) => {
    const modalContent = `${DisableForm({ aiUserAddress: aiUserAddress })}`;
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

  const handleRemove = (aiUserAddress) => {
    const modalContent = `${RemoveForm({ aiUserAddress: aiUserAddress })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiUserAddress.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserId: "",  aiAddress: "",  aiIsDefault: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUserId = layero.find('input[name="aiUserId"]').val();
          const aiAddress = layero.find('input[name="aiAddress"]').val();
          const aiIsDefault = layero.find('input[name="aiIsDefault"]').val();
           if (
           aiUserId &&

           aiAddress &&

           aiIsDefault
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserId,
          aiAddress,
          aiIsDefault,
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
