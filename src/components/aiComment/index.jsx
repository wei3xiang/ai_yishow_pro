import React, { useState } from "react";
import data from "../data/ai_comment.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiComment) => {
    const modalContent = `${UpdateForm({ aiComment: aiComment })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiComment,
              aiProductUuid: layero.find('input[name="aiProductUuid"]').val(), 
              aiCustomerUuid: layero.find('input[name="aiCustomerUuid"]').val(), 
              aiContent: layero.find('input[name="aiContent"]').val(), 
              aiRating: layero.find('input[name="aiRating"]').val(), 
              aiDate: layero.find('input[name="aiDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiComment) => {
    const modalContent = `${DisableForm({ aiComment: aiComment })}`;
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

  const handleRemove = (aiComment) => {
    const modalContent = `${RemoveForm({ aiComment: aiComment })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiComment.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiProductUuid: "",  aiCustomerUuid: "",  aiContent: "",  aiRating: "",  aiDate: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiProductUuid = layero.find('input[name="aiProductUuid"]').val();
          const aiCustomerUuid = layero.find('input[name="aiCustomerUuid"]').val();
          const aiContent = layero.find('input[name="aiContent"]').val();
          const aiRating = layero.find('input[name="aiRating"]').val();
          const aiDate = layero.find('input[name="aiDate"]').val();
           if (
           aiProductUuid &&

           aiCustomerUuid &&

           aiContent &&

           aiRating &&

           aiDate
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiProductUuid,
          aiCustomerUuid,
          aiContent,
          aiRating,
          aiDate,
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
