import React, { useState } from "react";
import data from "../data/ai_reviews.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiReviews) => {
    const modalContent = `${UpdateForm({ aiReviews: aiReviews })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiReviews,
              aiProductUuid: layero.find('input[name="aiProductUuid"]').val(), 
              aiUserUuid: layero.find('input[name="aiUserUuid"]').val(), 
              aiReviewText: layero.find('input[name="aiReviewText"]').val(), 
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

  const handleDetail = (aiReviews) => {
    const modalContent = `${DisableForm({ aiReviews: aiReviews })}`;
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

  const handleRemove = (aiReviews) => {
    const modalContent = `${RemoveForm({ aiReviews: aiReviews })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiReviews.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiProductUuid: "",  aiUserUuid: "",  aiReviewText: "",  aiRating: "", };
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
          const aiUserUuid = layero.find('input[name="aiUserUuid"]').val();
          const aiReviewText = layero.find('input[name="aiReviewText"]').val();
          const aiRating = layero.find('input[name="aiRating"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiProductUuid,aiUserUuid,aiReviewText,aiRating, }]);
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
