import React, { useState } from "react";
import data from "../data/ai_product评论.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiProduct评论) => {
    const modalContent = `${UpdateForm({ aiProduct评论: aiProduct评论 })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiProduct评论,
              aiProductId: layero.find('input[name="aiProductId"]').val(), 
              aiUserId: layero.find('input[name="aiUserId"]').val(), 
              aiContent: layero.find('input[name="aiContent"]').val(), 
              aiRating: layero.find('input[name="aiRating"]').val(), 
              aiCreatedAt: layero.find('input[name="aiCreatedAt"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiProduct评论) => {
    const modalContent = `${DisableForm({ aiProduct评论: aiProduct评论 })}`;
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

  const handleRemove = (aiProduct评论) => {
    const modalContent = `${RemoveForm({ aiProduct评论: aiProduct评论 })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiProduct评论.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiProductId: "",  aiUserId: "",  aiContent: "",  aiRating: "",  aiCreatedAt: "", };
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
          const aiUserId = layero.find('input[name="aiUserId"]').val();
          const aiContent = layero.find('input[name="aiContent"]').val();
          const aiRating = layero.find('input[name="aiRating"]').val();
          const aiCreatedAt = layero.find('input[name="aiCreatedAt"]').val();
           if (
           aiProductId &&

           aiUserId &&

           aiContent &&

           aiRating &&

           aiCreatedAt
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiProductId,
          aiUserId,
          aiContent,
          aiRating,
          aiCreatedAt,
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
