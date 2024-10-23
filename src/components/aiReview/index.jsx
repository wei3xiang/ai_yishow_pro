import React, { useState } from "react";
import data from "../data/ai_review.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiReview) => {
    const modalContent = `${UpdateForm({ aiReview: aiReview })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiReview,
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiBeerName: layero.find('input[name="aiBeerName"]').val(), 
              aiContent: layero.find('input[name="aiContent"]').val(), 
              aiReviewDate: layero.find('input[name="aiReviewDate"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiReview) => {
    const modalContent = `${DisableForm({ aiReview: aiReview })}`;
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

  const handleRemove = (aiReview) => {
    const modalContent = `${RemoveForm({ aiReview: aiReview })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiReview.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiUserUuid: "",  aiBeerName: "",  aiContent: "",  aiReviewDate: "", };
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
          const aiBeerName = layero.find('input[name="aiBeerName"]').val();
          const aiContent = layero.find('input[name="aiContent"]').val();
          const aiReviewDate = layero.find('input[name="aiReviewDate"]').val();
           if (
           aiUserUuid &&

           aiBeerName &&

           aiContent &&

           aiReviewDate
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiUserUuid,
          aiBeerName,
          aiContent,
          aiReviewDate,
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
