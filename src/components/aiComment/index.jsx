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
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiProductCode: layero.find('input[name="aiProductCode"]').val(), 
              aiCommentContent: layero.find('input[name="aiCommentContent"]').val(), 
              aiRating: layero.find('input[name="aiRating"]').val(), 
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
    const newItem = { uuid: "",  aiUserUuid: "",  aiProductCode: "",  aiCommentContent: "",  aiRating: "", };
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
          const aiProductCode = layero.find('input[name="aiProductCode"]').val();
          const aiCommentContent = layero.find('input[name="aiCommentContent"]').val();
          const aiRating = layero.find('input[name="aiRating"]').val();
           if (
           aiUserUuid &&

           aiProductCode &&

           aiCommentContent &&

           aiRating
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserUuid,
          aiProductCode,
          aiCommentContent,
          aiRating,
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
