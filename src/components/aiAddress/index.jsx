import React, { useState } from "react";
import data from "../data/ai_address.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiAddress) => {
    const modalContent = `${UpdateForm({ aiAddress: aiAddress })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiAddress,
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiName: layero.find('input[name="aiName"]').val(), 
              aiAddress: layero.find('input[name="aiAddress"]').val(), 
              aiPhone: layero.find('input[name="aiPhone"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiAddress) => {
    const modalContent = `${DisableForm({ aiAddress: aiAddress })}`;
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

  const handleRemove = (aiAddress) => {
    const modalContent = `${RemoveForm({ aiAddress: aiAddress })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiAddress.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserUuid: "",  aiName: "",  aiAddress: "",  aiPhone: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiName = layero.find('input[name="aiName"]').val();
          const aiAddress = layero.find('input[name="aiAddress"]').val();
          const aiPhone = layero.find('input[name="aiPhone"]').val();
           if (
           aiUserUuid &&

           aiName &&

           aiAddress &&

           aiPhone
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserUuid,
          aiName,
          aiAddress,
          aiPhone,
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
